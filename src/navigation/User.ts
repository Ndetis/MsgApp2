    import IUser from "./IUser";
    import AsyncStorage from '@react-native-async-storage/async-storage';
    import { string } from 'yup';
    
    export class User implements IUser {
        id?: number | undefined;
        name: string;
        email: string;
        phone?: string | undefined;
        password: string;
        static USERS_KEY='users';
    
        constructor(name:string, email:string,password:string, phone?:string){
            this.name = name
            this.email = email
            this.phone = phone
            this.password = password
    
        }
      async   save(){
            const storage = await AsyncStorage.getItem(User.USERS_KEY)||[];       
        
            const users:any[] = JSON.parse(storage)
            users.push({
                id: users.length,
                name:this.name,
                email:this.email,
                phone:this.phone,
                password:btoa(this.password)
            })
            AsyncStorage.setItem(User.USERS_KEY,JSON.stringify(users));
        }
        static signin(credentials:{email:string,password:string}):User|boolean{
            const storage = AsyncStorage.getItem(User.USERS_KEY)||[];
            const users:any[]|null = storage;
            const res = users?.find((user)=>{
                try{
                    return user.email==credentials.email&& atob(user.password)==credentials.password;
                }catch(e){
                    return false;
                }
            })
            if(res){
                return new User(res.name,res.email,res.phone,res.password);
            }else{
                return false;
            }
        }
    }
