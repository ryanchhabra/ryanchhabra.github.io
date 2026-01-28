import photo1 from "../assets/photos/1.jpeg";
import photo2 from "../assets/photos/2.jpeg";
import photo3 from "../assets/photos/3.jpeg";
import photo4 from "../assets/photos/4.jpeg";
import photo5 from "../assets/photos/5.jpeg";
import photo6 from "../assets/photos/6.jpeg";

export type Memory = {
  title: string;
  date?: string;
  image: string;
  text: string;
};

export const memories: Memory[] = [
  {
    title: "Our First Date",
    text: "This was our first date, watching a movie about something we both love, and eating dinner together, another thing we both love. This was the first time I tried Din Tai Fung, and having it with you made it ten times better. I remember how surprised I was when I tried those red bean dumplings with the sea salt cream, oh my god. I really can't wait till we explore all the restaurants in the world together (i mean the good ones) because for some reason going to good restaurants is in my genetics hehe.",
    image: photo1,
  },
  {
    title: "Sim Racing!!!!",
    text: "My first time doing one of my most favorite things was with my favorite person!! It was really funny how we both crashed like so many times. I'm a better driver now though trust, cuz I've been practicing on my wheel at home. It's genuinely so hard to get used to though... but I'll teach you as soon as we can hang out and you can use my wheel. Oh also, I liked the food, but not as much as Din Tai Fung, and remember how we ordered only 2 things but we literally could not finish them. That was funny haha. Oh and THOSE CUPCAKES were so goodddddddd. I love sharing food with you cuz we get to be big backs together :D",
    image: photo2,
  },
  {
    title: "To all the 0.5s",
    text: "This picture of you represents every single 0.5 I've taken of you, which is ALOT. This one's my favorite for a reason that I do not know myself, so it would be pointless asking why. I genuinely love filling up my camera roll with random 0.5s of my favorite person, so whenever I'm scrolling through it looking for a picture, every scroll I just see another 0.5 of you and it reminds me of a specific moment or usually just makes me smile or grin, even in the saddest of moments. One day, a few years later, we should sit together and collect all of our 0.5 pictures of eachother and put them in a folder and see how many we have!",
    image: photo3,
  },
  {
    title: "Our walks outside",
    text: "I was so devestated when we didn't get the same lunch in our last year in high school together, and even after you trying to switch your schedule 3 times, it still didn't work out. But, we still made the most of it on wednesdays! I can't wait till the weather gets nice again and we can go outside more often during wednesday lunches. I want to be able to see your espresso tinted eyes and your golden brown skin glistening under the sun again. While also eating of course, because we love eating, remember? Yeah of course you remember :)",
    image: photo4,
  },
  {
    title: "Top Golf!",
    text: "You have no idea how happy I was when you told me your parents said yes to coming to my birthday party. It would never have been the same without you. I loved every second of vibing to songs in the car (yes even Golden) and also pranking Aakash that I could read your mind and play the exact song you were thinking of. He was lowk a bit clueless. And it was also rlly funny to both get humbled at golf by Daren and Aakash with their crazy unc golf skills. But don't worry, if we go karting with them, we'll both destory everyone else hehe",
    image: photo5,
  },
  {
    title: "The Teddy Bear",
    text: "I was driving when I saw this picture, and I swear I would've grinned so hard everyone in the cars around me would've noticed. I love it. Absolutely adore it. This is my favorite picture of you by far, no questions asked. I love it so much because your smile is just filled with PURE happiness and you look like you just got into college in that picture and that just makes me so happy. Seeing you happy makes me happy.",
    image: photo6,
  },
];
