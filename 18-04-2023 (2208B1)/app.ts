// let stdName="ABCD"
// stdName="12"

// let stdName:string
// stdName=12
// stdName="ABCD"

// let age:number
// age="Ten"
// age=10.89

// let names:number[]=[1,2,3,4]
// // names[2]="ABCD"
// // names.push("ABCD")

// names.push(123)
// console.log(names)

// type Person={
//     name:string,
//     age:number,
//     hobbies?:string[],
// email?:string
// }

// let person:Person={
//     name:"ABCD",
//     age:10,
// }


// class Student{
    
//         name:string;
//         age:number;
//       private skills:string[]=[]
//         constructor(name:string,age:number){
//             this.name=name;
//             this.age=age;
//         }
//       addSkills(skill:string){
//             this.skills.push(skill)
            
//       }
    
//     }
//     const student=new Student("Sameer",23) 
//     // student.skills.push("JS")
//     student.addSkills("JS")
//     student.addSkills("TS")
//     console.log(student)

//  abstract class Product{
//         constructor(private _id:number,private _name:string,private _price:number){
//         }
//        get id(){
//              return this._id
//        }
//         get name(){
//             return this._name
//         }
//         set name(newName:string){
//             if(!newName){
//                 throw new Error("Name cannot be empty")
//             }
//             else{
//             this._name=newName
//             }
//         }
//         get price(){
//             return this._price
//         }
//     abstract getDiscount():number
//     }
//     // const p1=new Product(1,"Shirt",2000)
//     // p1.name=""
//     // console.log(p1.name)
//     class ClothingProduct extends Product{
//         constructor(id:number,name:string,price:number,public size:string){
//             super(id,name,price)
//         }
//     getDiscount(): number {
//         return this.price*0.9
//     }
//     }
//     class Electronics extends Product{
//         constructor(id:number,name:string,price:number,public warranty:number){
//             super(id,name,price)
//         }
//     getDiscount(): number {
//         return this.price*0.8
//     }
//     }
    // class Cart{
    // private products:Product[]=[]
    //     constructor(){
    // }
    // get totalPrice(){
    //     let price:number=0
    //     this.products.forEach((product)=>{
    //         price+=product.price
    //     }
    // }
    // }
    // const p1=new ClothingProduct(1,"Shirt",2000,"XL")
    // console.log(p1)

    // function move(){
    //     console.log("Moving")
    // }

    const move=()=>{
        console.log("Moving")
    }


   

