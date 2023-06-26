export const Menuitems = [
    {
      title: "Transferencias ",
 
      href: "/home",
    },
    {
        title: "Transferencias",
   
        href: "/home",
      },
      {
        title: "Transferencias",
   
        href: "/home",
      },
 ]

 export function checkObject(arr) {

    // check if arr is array
    const result = Array.isArray(arr);
    setTimeout(() => {
   
  
  
    if(result) {
        console.log(`[${arr}] is an array.`);
    }
    else {
        console.log(`${arr} is not an array.`);
    }
  }, 5000);
  }