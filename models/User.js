const mongoose =require('mongoose')
const bcrypt =require('bcryptjs')
const userSchema= new mongoose.Schema({
    name :{type:String , required:true},
    email :{ type :String , required : true , unique : true},
    phone :{ type : String , required : true},
    password: { type: String, required: true }
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});


userSchema.index({ name: 1, phone: 1 });

module.exports= mongoose.model("User", userSchema);
