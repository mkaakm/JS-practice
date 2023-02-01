const user = {
    name: "Александр",
    lastName: "Македонский",
    getFullName(){
        console.log(this);
        const fullName = `${this.name} ${this.lastName}`;
        // console.log(fullName);
        return fullName;
    }
};