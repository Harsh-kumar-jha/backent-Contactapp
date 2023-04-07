const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModels");
// desc GET all contacts
// @route GET /api/contacts
// @access private

const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({ user_id: req.user.id });
  res.status(200).json({
    success: true,
    contacts,
  });
});

// desc  create  contacts
// @route Post /api/contacts
// @access private

const createContacts = asyncHandler(async (req, res) => {
  // console.log("The body of req is :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });
  res.status(201).json({
    success: true,
    message: contact,
  });
});
// desc  get a single  contacts
// @route GET /api/contacts/:id
// @access private

const getASingleContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found...");
  }
  res.status(200).json({
    success: true,
    contact,
  });
});
// desc  update a  contacts
// @route PUT /api/contacts/:id
// @access private

const updateContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found...");
  }
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error(
      "User don't have the permission to change the contact of another user "
    );
  }

  const updatedContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json({
    success: true,
    updatedContact,
  });
});
// desc  delete a  contacts
// @route Delete /api/contacts/:id
// @access private

const deleteContacts = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found...");
  }
  if (contact.user_id.toString() !== req.user.id) {
    res.status(403);
    throw new Error(
      "User don't have the permission to change the contact of another user "
    );
  }
  await Contact.deleteOne({ _id: req.params.id });
  res.status(200).json({
    success: true,
    message: `Delete a contact ${req.params.id}`,
  });
});

module.exports = {
  getAllContacts,
  createContacts,
  getASingleContact,
  updateContacts,
  deleteContacts,
};
