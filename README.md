## 🍏🍒🍇 Flip It! - Memory Card Game

Concentration or memory games are well-known among many, even for beginners who are new to gaming. I decided to build a memory card game as a way to reminisce about my childhood days - this is one of the games that introduced me to the world of gaming.

Flip It!'s objective is to click and match two identical cards containing fruit emojis until all cards are faced up within a time limit.

There are two modes:
1. **Normal mode:** 4 x 4 grid, to complete within 30 secs
2. **Hard mode:** 5 x 6 grid (with more fruit variations!), to complete within 1 min 20 secs

## 🔧 Built With

- `Vite`
- `HTML`
- `CSS`
- `Bootstrap`
- `JavaScript`

## 📝 Process

This is my first project during my course at General Assembly. The time given to complete this project is about a week. I was required to build a game of my choice using HTML, CSS and JavaScript and render the game using a browser. I must also implement a win/loss logic and include messages to reflect it.

To kickstart the project, I drew a rough sketch of the wireframe to display the flow of the game. [[Figma]](https://www.figma.com/file/pAYLwdUUbU9GbX8jzC97Gh/Memory-Card-Game-(Project-1)?type=design&node-id=0%3A1&mode=design&t=xMCBTFMv7KVi3MKj-1)

I also planned and integrated the following game logic:
   - Shuffle card deck everytime each round restarts
   - Append and render images upon clicking each card (Using DOM manipulation)
   - Compare two cards and invoke an action (flip it back if not identical, remain open AND disable clicks if identical)
   - Timer countdown and invoke an action (game over page if lose, next level page/game complete page if win)

Even though it is a simple concentration game, a lot of thought has to go behind crafting the logic while thinking in the perspective of players who will be playing my game. It is important to predict their behaviour as they will be "trying their best" in every way possible to break it by, for example, clicking every card in a random and quick manner, and this includes cards that were already matched and open, etc. I had to also consider at which point does the timer starts counting down, the moment the player enters the level, or when the first card was clicked.

Nevertheless, there are still more to be done to ensure that my game is bug-free and unbreakable.

## 💭 Improvements

- Ensure scalability to accommodate and integrate other modes with increased difficulty.
- Add flip animation to cards.
- Allow selection of elements by including other categories of images besides emojis of fruits e.g. animals, plants/flowers, etc.

## 📸 Demo Images

![Screenshot 2024-02-16 at 4 04 18 PM](https://github.com/evangelenesiyin/memorycard/assets/108106809/dad08b38-4528-417c-bc24-21c7b95e1026)
![image](https://github.com/evangelenesiyin/memorycard/assets/108106809/60c6b657-1f20-4052-86eb-fe876303339c)
![image](https://github.com/evangelenesiyin/memorycard/assets/108106809/c8f530f8-f263-412d-b791-882e1eab5b08)
![Screenshot 2024-02-16 at 3 59 48 PM](https://github.com/evangelenesiyin/memorycard/assets/108106809/68c2ff6c-341c-4cf7-9d30-93f2a3cab33f)
![image](https://github.com/evangelenesiyin/memorycard/assets/108106809/08ff6e99-2294-4063-af41-916da13d7ae6)
