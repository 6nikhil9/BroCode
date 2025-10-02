#include <iostream>
using namespace std;

int main()
{
    string characterName = "lund";
    int characterAge;
    characterAge = 69;

    cout <<"Hello World!"<< characterName << endl;
    cout <<"Hello Lund!" << characterAge << "bitch" <<endl;

    characterName = "raand";
    characterName[0] = 'R';
    cout <<"hello lundistann\n" << characterName[1];
    cout << characterName << "\n";
    return 0;
}