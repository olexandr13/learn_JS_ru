//Добавить get/set-свойства
function User(fullName) {
    this.fullName = fullName;
    Object.defineProperties(this, {
        firstName: {
            get: function() {
                return this.fullName.split(' ')[0];
            },
            set: function(value) {
                this.fullName = value + ' ' + this.lastName;
            }
        },
        lastName: {
            get: function() {
               return this.fullName.split(' ')[1];
            },
            set: function(value) {
               this.fullName = this.firstName + ' ' + value;
            }
        }
    })
}