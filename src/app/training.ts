function sum(a: number, b: number): number {
  return a + b
}

type UploadStatus = "loading" | "success" | "error";
let uploadStatus: UploadStatus

type TextFormat = 'uppercase'| 'lowercase'| 'capitalize';
let textFormat: TextFormat

interface IUser {
  age: number;
  name: string;
  surname: string;
  email?: string;
}

interface IStydent extends IUser {
  course: number;
  group: string;
}

function formatText (text: string, formatType: TextFormat):string {
  if (formatType === 'uppercase') {
    return text.toUpperCase();
  } else if (formatType === 'lowercase') {
    return text.toLowerCase();
  } else {
    return text[0].toUpperCase() + text.slice(1).toLocaleLowerCase();
  }
}

function removeChar (text: string, char: string): string {
  return text.replaceAll(char, "");
}

let users:IUser[] = [{age: 27, name: 'Миша', surname: 'Мельников'}, {age: 19, name: 'Карина', surname: 'Ковалёва'}, {age: 17, name: "Саша", surname: "Разумовская"}]
let adultUsers = users.filter((user) => {
 return user.age > 18 
})

