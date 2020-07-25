import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please Add A Title'],
    unique: true,
    trim: true,
    maxlength: [40, 'Title Cannot Be More than 40 Characters'],
  },
  description: {
    type: String,
    required: [true, 'Please Add A Description'],
    maxlength: [200, 'Description Cannot Be More than 200 Characters'],
  },
});

export default mongoose.models.Note || mongoose.model('Note', NoteSchema);
// export {NoteSchema};
