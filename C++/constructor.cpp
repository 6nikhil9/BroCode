#include <iostream>
using namespace std;

class Student{
    public:
    string name;
    int  age;
    double gpa;

    Student(string name, int age, double gpa){
        this->name = name;
        this->age = age;
        this->gpa = gpa;
    }
};

int main(){

    Student student1("dickhead",100,3.2);
    Student student("adonis",30000,0.005);

    cout << student.name << '\n';
    cout << student.age << '\n';
    cout << student.gpa << '\n';

    return 0;
}