const Student = require('../models/Student');

exports.getStudents = async (req, res) => {
  const students = await Student.find({ userId: req.user.id });
  res.json(students);
};

exports.createStudent = async (req, res) => {
  const { name, rollNumber, department, year } = req.body;
  const student = new Student({ name, rollNumber, department, year, userId: req.user.id });
  await student.save();
  res.status(201).json(student);
};

exports.updateStudent = async (req, res) => {
  const student = await Student.findOneAndUpdate(
    { _id: req.params.id, userId: req.user.id },
    req.body,
    { new: true }
  );
  if (!student) return res.status(404).json({ msg: 'Student not found' });
  res.json(student);
};

exports.deleteStudent = async (req, res) => {
  const student = await Student.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
  if (!student) return res.status(404).json({ msg: 'Student not found' });
  res.json({ msg: 'Deleted' });
};
