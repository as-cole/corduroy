import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  constructor() {  }

  pages = [
    {
      pageNum: 0, // title page
      image: ``,
      text: `Corduroy`
    },
    {
      pageNum: 1,
      image: ``,
      text: `Corduroy is a bear who once lived in the toy department of a big store. Day after day he waited with all the other animals and dolls for somebody to come along and take him home.`
    },
    {
      pageNum: 2,
      image: ``,
      text: `The store was always filled with shoppers buying all sorts of things, but no one ever seemed to want a small bear in green overalls.`
    },
    {
      pageNum: 3,
      image: ``,
      text: `Then one morning a little girl stopped and looked straight into Corduroy's bright eyes. "Oh, Mommy!", she said "Look! There's the very bear I've always wanted." "Not today, dear." Her mother sighed. "I've spent too much already. Besides, he doesn't look new. He's lost the button to one of his shoulder straps.`
    },
    {
      pageNum: 4,
      image: ``,
      text: 'Corduroy watched them sadly as they walked away.'
    },
    {
      pageNum: 5,
      image: ``,
      text: `"I didn't know I'd lost a button," he said to himself. "Tonight I'll go and see if I can find it."`
    },
    {
      pageNum: 6,
      image: ``,
      text: `Late that evening, when all the shoppers had gone and the doors were shut and locked, Corduroy climbed carefully down from his`
    },
    {
      pageNum: 7,
      image: ``,
      text: `shelf and began searching everywhere on the floor for his lost button.`
    },
    {
      pageNum: 8,
      image: ``,
      text: `Suddenly he felt the floor moving under him! Quite by accident he had stepped onto an escalator-and up he went!`
    },
    {
      pageNum: 9,
      image: ``,
      text: `"Could this be a mountain?" he wondered. "I think I've always wanted to climb a mountain."`
    },
    {
      pageNum: 10,
      image: ``,
      text: `He stepped off the escalator as it reached the next floor, and there, before his eyes, was a most amazing sight-`
    },
    {
      pageNum: 11,
      image: ``,
      text: `tables and chairs and lamps and sofas, and rows and rows of beds. "This must be a palace!" Corduroy gasped. "I guess I've always wanted to live in a palace."`
    },
    {
      pageNum: 12,
      image: ``,
      text: `He wandered around admiring the furniture. "This must be a bed," he said. "I've always wanted to sleep in a bed." And up he crawled onto a large, thick mattress.`
    },
    {
      pageNum: 13,
      image: ``,
      text: `All at once he saw something small and round. "Why, here's my button!" he cried. And he tried to pick it up. But, like all the other buttons on the mattress, it was tied down tight.`
    },
    {
      pageNum: 14,
      image: ``,
      text: `He yanked and pulled with both paws until POP! Off came the button-and off the mattress Corduroy toppled,`
    },
    {
      pageNum: 15,
      image: ``,
      text: `bang into a tall floor lamp. Over it fell with a crash!`
    },
    {
      pageNum: 16,
      image: ``,
      text: `Corduroy didn't know it, but there was someone else awake in the the store. The night watchman was going his rounds on the floor above. When he heard the crash he came dashing down the escalator`
    },
    {
      pageNum: 17,
      image: ``,
      text: `"Now who in the world did that!" he exclaimed. "Somebody must be hiding around here!"`
    },
    {
      pageNum: 18,
      image: ``,
      text: `He flashed his light under and over sofas and beds until he came to the biggest bed of all. And there he saw two fuzzy brown ears sticking up from under the cover.`
    },
    {
      pageNum: 19,
      image: ``,
      text: `"Hello!" he said. "How did you get upstairs?"`
    },
    {
      pageNum: 20,
      image: ``,
      text: `The watchman tucked Corduroy under his arm and carried him down the escalator`
    },
    {
      pageNum: 21,
      image: ``,
      text: `and set him on the shelf in the toy department with the other animals and dolls.`
    },
    {
      pageNum: 22,
      image: ``,
      text: `Corduroy was just waking up when the first customers came into the store in the morning. And there, looking at him with a wide, warm smile, was the same little girl he'd seen only the day before.`
    },
    {
      pageNum: 23,
      image: ``,
      text: `"I'm Lisa," she said, "and you're going to be my very own bear. Last night I counted what I've saved in my piggy bank and my mother said I could bring you home."`
    },
    {
      pageNum: 24,
      image: ``,
      text: `"Shall I put him i a box for you?" the saleslady asked. "Oh, no thank you," Lisa answered. And she carried Corduroy home in her arms.`
    },
    {
      pageNum: 25,
      image: ``,
      text: `She ran all the way up four flights of stairs, into her family's apartment, and straight to her own room.`
    },
    {
      pageNum: 26,
      image: ``,
      text: `Corduroy blinked. There was a chair and a chest of drawers, and alongside a girl-size bed stood a little bed just the right size for him. The room was small, nothing like that enormous palace in the department store. "This must be home," he said. "I know I've always wanted a home!"`
    },
    {
      pageNum: 27,
      image: ``,
      text: `Lisa sat down with Corduroy on her lap and began to sew a button on his overalls. "I like you the way you are," she said, "but you'll be more comfortable with your shoulder strap fastened."`
    },
    {
      pageNum: 28,
      image: ``,
      text: `"You must be a friend," said Corduroy. "I've always wanted a friend." "Me too!" said Lisa, and give him a big hug.`
    }
  ];

  getAllPages() {
    return this.pages;
  };

  getPageByNum(num) {
    return this.pages.find(el => el.pageNum == num);
  }

}
