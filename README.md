Thats just a test repo i've created to understand the problem of accessing user data by SSC (Server side components) in Next.js.

So if you are facing the problem that the server side helpers auth( ) and currentUser( ) are returning null, it may be your
pc time stamp config, so i'll show how you 'can' fix this for the time being.

By the way, now i'm using Next 15. But i guess, that it might be work to you if u are using an old version.

example:

user.actions.ts

'use server'
...imports

export async function getUser() {

  const {userId} = await auth(); -> returns null;
  const user = await currentUser() -> return null;
}

##Linux

Idk how to solve it on linux, but you can adjust your time stamp by the terminal, that's the
code that CHAT GPT generated for me: sudo ntpdate -u time.google.com

##Windows

So, you must open the control panel first, and select this option:

![image](https://github.com/user-attachments/assets/54eb5ea3-ca0b-4a2c-a1a9-12475baa1d99)

After, u should config your time stamp:

![image](https://github.com/user-attachments/assets/b9ff413e-873a-4058-b9ce-d5112a4fc5e7)

Select THIS option: 

![image](https://github.com/user-attachments/assets/5591dde2-9b8e-4407-97a2-173bca34e880)

To sync your time stamp with internet....it should be diferent for each region...so you must know
what use.

After that, u can try to test the application, to see if you can access the user data by server side components.

I hope i've helped you, because i've faced this problem for a few days💀
