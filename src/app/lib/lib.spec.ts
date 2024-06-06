
import { add } from "./lib";

describe ("Test lib",()=>{
    // Test Add function
    it ("Test Add function", ()=>{

        let a =Math.round(Math.random() * 452255) ;
        let b =Math.round(Math.random() * 452855) ;
        
        //let value = add(1,2) ;
        let value = add(a,b) ;

        //expect(3).toEqual(value);
        expect(a+b).toEqual(value);
      

    })
})