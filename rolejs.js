/* 

ROLEJS
RoleJS is a Javascript library for permissions.

PolRoGi
*/

class Permission {
    Name;
    On;

    on(str) {
        this.On = str;
        return this;
    }
}

class User {
    Permissions = [];
    
    perm(str) {
        var p = new Permission();
        p.Name = str;
        this.Permissions.push(p);
        return p;
    }

    can(perm, on) {
        for(let i = 0; i < this.Permissions.length; i++) {
            if(this.Permissions[i].Name == perm && this.Permissions[i].On == on) {
                return true;
            }
        }
        return false;
    }
}

module.exports = {
    user() {
        return new User();    
    }
};