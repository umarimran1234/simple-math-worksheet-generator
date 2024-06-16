import { getArrRandomIndex } from "./array-utils";

/**
 * emoji source from
 * https://gist.github.com/roachhd/1f029bd4b50b8a524f3c#file-readme-md
 */

export const fruitEmojis = ["🍎", "🍏", "🍊", "🍋", "🍒", "🍇", "🍉", "🍓", "🍑", "🍈", "🍌", "🍐", "🍍"];

export const animalEmojis = [
    "🐱", "🐶", "🐭", "🐹", "🐰", "🐺", "🐸", "🐯", "🐨", "🐻", 
    "🐷", "🐮", "🐗", "🐵", "🐒", "🐴", "🐎", "🐫", "🐑", "🐘", 
    "🐼", "🐍", "🐦", "🐤", "🐥", "🐣", "🐔", "🐧", "🐢", "🐛", 
    "🐝", "🐜", "🪲", "🐌", "🐙", "🐠", "🐟", "🐳", "🐋", "🐬", 
    "🐄", "🐏", "🐀", "🐃", "🐅", "🐇", "🐉", "🐐", "🐓", "🐕", 
    "🐖", "🐁", "🐂", "🐲", "🐡", "🐊", "🐪", "🐆", "🐈", "🐩"
];

export const foodEmojis = [
    "🍕", "🍔", "🍟", "🍗", "🍖", "🍝", "🍛", "🍤", "🍱", "🍣", 
    "🍥", "🍙", "🍘", "🍚", "🍜", "🍲", "🍢", "🍡", "🥚", "🍞", 
    "🍩", "🍮", "🍦", "🍨", "🍧", "🎂", "🍰", "🍪", "🍫", "🍬", 
    "🍭", "🍯"
];

export const transportEmojis = [
    "🚀", "✈️", "🚁", "🚂", "🚊", "🚞", "🚲", "🚡", "🚟", "🚠", 
    "🚜", "🚙", "🚘", "🚗", "🚗", "🚕", "🚖", "🚛", "🚌", "🚍", 
    "🚨", "🚓", "🚔", "🚒", "🚑", "🚐", "🚚", "🚋", "🚉", "🚆", 
    "🚅", "🚄", "🚈", "🚝", "🚃", "🚎"
];

export const defaultEmojiCategoriesArr = [
    { category: 'fruits',  arr : fruitEmojis},
    { category: 'animals', arr : animalEmojis },
    { category: 'food', arr : foodEmojis },
    { category: 'transport', arr : transportEmojis }
];

export const imgCategoryNames:string[] = defaultEmojiCategoriesArr.map((category) => category.category);

const getCategory = (category: string) => defaultEmojiCategoriesArr.filter((record) => record.category == category).at(0)?.arr;

const getCategoriesWithIncludeList = (categoriesToInclude: string[]) => defaultEmojiCategoriesArr.filter((record) => !categoriesToInclude.some((catToInclude: string) => record.category === catToInclude));

export const getRandomCategory = (): string => defaultEmojiCategoriesArr[getArrRandomIndex(defaultEmojiCategoriesArr)].category;

export const getRandomIndexByCategory = (category: string): number => getArrRandomIndex(getCategory(category));

export const getEmojiByCategory = (category: string, index: number) => getCategory(category)?.at(index);