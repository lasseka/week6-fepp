Login differences: 
  -The static login in user schema has the purpose of checking the inputs to make sure they are correct for the backend to interact with them, the same logic is instead done in the controller in the other version.
  -In the static model we use this.findOne as we are already inside the user schema compared to the User.findone of the other version where we have to indicate that we want to look in the user schema for a match.
  -In v2 bcrypt is imported in the the controller as the password decryption / compare is done in the controller with the password taken from the model, whereas in the other version bcrypt is imported in the model as the comparement is done there.
Signup differences
  -the static signup has the same purpose as the signup done in the controller of the other version which is to make sure that the data given matches the parameters of our model + requirements
  -In the static method we use this.create as we are calling it inside the model, whereas in the other versioun we have to specify the user (User.create) to be the model we want to be accessing
  -In v2 the validator is imported in the controller instead of the model because the validation is done inside the controller and not in the model unlike the other version where this is the other way around