class Persona{
    constructor(age, heigth, weight, color_hair, color_eyes, first_name, last_name, anyo_nacimiento, aficion){
        this.age = age
        this.heigth = heigth
        this.weight = weight
        this.color_eyes = color_eyes
        this.color_hair = color_hair
        this.first_name = first_name
        this.last_name = last_name
        this.anyo_nacimiento = anyo_nacimiento
        this.aficion = aficion
    }
    imc(){
        return this.weight / Math.pow(this.heigth, 2)
    }
    edad(anyo_actual){
        return anyo_actual - this.anyo_nacimiento
    }
    mostrarTodos(){
        let res = {
            "age": this.age,
            "heigth": this.heigth,
            "weight": this.weight,
            "color_eyes": this.color_eyes,
            "color_hair": this.color_hair,
            "first_name": this.first_name,
            "last_name": this.last_name,
            "anyo_nacimiento": this.anyo_nacimiento,
            "aficion": this.aficion
        }
        return res
    }
    mostrarAficiones(){
        console.log(this.aficion)
    }
    getAge(){
        return this.age
    }
    setAge(newAge){
        this.age = newAge
    }
    getHeight(){
        return this.heigth
    }
    setHeight(newHeigh){
        this.heigth = newHeigh
    }
    getWeight(){
        return this.weight
    }
    setWeight(newWeight){
        this.weight = newWeight
    }
    getColorEyes(){
        return this.color_eyes
    }
    setColorEyes(newColorEyes){
        this.color_eyes = newColorEyes
    }
    getColorHair(){
        return this.color_hair
    }
    setColorHair(NewHairColor){
        this.color_hair = NewHairColor
    }
    getFirstName(){
        return this.first_name
    }
    setFirstName(newFirstName){
        this.first_name = newFirstName
    }
    getLastName(){
        return this.last_name
    }
    setLastName(newLastName){
        this.last_name = newLastName
    }
    getAnyoNacimient(){
        return this.anyo_nacimiento
    }
    setAnyoNacimiento(newAnyoNacimiento){
        this.anyo_nacimiento = newAnyoNacimiento
    }
    getAficion(){
        return this.aficion
    }
    setAficion(newAficion){
        this.aficion = newAficion
    }
}


let p1 = new Persona(18, 1.7, 70, "dark", "brown", "Jiaen", "Pan", 1994, ["Movies","Music","Videogames"])


console.log(p1.mostrarTodos())