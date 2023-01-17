// this represented the class

class A 
{
    a=100;
    display()
    {
        console.log(this.a);
    }
}
class B extends A // "A" is a main class that extendes to "B"
{
    b=200;
    show(){
        console.log(this.b);
    }
}
bobj=new B(); // this word "bobj" we crear an object in the class 
bobj.display();//100
bobj.show();//200

