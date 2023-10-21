
import { getRandomIndex } from "./array-utils";
/**
 * numberblocks (for fun-multiplications)
 */
import numberBlocks_01 from "$lib/images/numberblocks/numberBlocks_01.png";
import numberBlocks_02 from "$lib/images/numberblocks/numberBlocks_02.png";
import numberBlocks_03 from "$lib/images/numberblocks/numberBlocks_03.png";
import numberBlocks_04 from "$lib/images/numberblocks/numberBlocks_04.png";
import numberBlocks_05 from "$lib/images/numberblocks/numberBlocks_05.png";
import numberBlocks_06 from "$lib/images/numberblocks/numberBlocks_06.png";
import numberBlocks_07 from "$lib/images/numberblocks/numberBlocks_07.png";
import numberBlocks_08 from "$lib/images/numberblocks/numberBlocks_08.png";
import numberBlocks_09 from "$lib/images/numberblocks/numberBlocks_09.png";
import numberBlocks_10 from "$lib/images/numberblocks/numberBlocks_10.png";

export const numberblocksImgs = [
    numberBlocks_01, numberBlocks_02, numberBlocks_03, numberBlocks_04, numberBlocks_05, 
    numberBlocks_06, numberBlocks_07, numberBlocks_08, numberBlocks_09, numberBlocks_10
];

export const getNumberBlocksImage = (num: number): string => numberblocksImgs[num-1];


/**
 * fruits
 */
import apple from "$lib/images/fruits/apple.png";
import banana from "$lib/images/fruits/banana.png";
import blueberry from "$lib/images/fruits/blueberry.png";
import cherry from "$lib/images/fruits/cherry.png";
import lemon from "$lib/images/fruits/lemon.png";
import orange from "$lib/images/fruits/orange.png";
import pear from "$lib/images/fruits/pear.png";
import pinapple from "$lib/images/fruits/pineapple.png";
import strawberry from "$lib/images/fruits/strawberry.png";
import watermelon from "$lib/images/fruits/watermelon.png";

export const fruitImgs = [apple, banana, blueberry, cherry, lemon, orange, pear, pinapple, strawberry, watermelon];

/**
 * Mcdonalds
 */
import applepie from "$lib/images/mcdonalds/applepie.png";
import bigmac from "$lib/images/mcdonalds/bigmac.png";
import cola from "$lib/images/mcdonalds/cola.png";
import corncup from "$lib/images/mcdonalds/corncup.png";
import fishburger from "$lib/images/mcdonalds/fishburger.png";
import fries from "$lib/images/mcdonalds/fries.png";
import hashbrown from "$lib/images/mcdonalds/hashbrown.png";
import icecream from "$lib/images/mcdonalds/icecream.png";
import mcnuggets from "$lib/images/mcdonalds/mcnuggets.png";
import mcwings from "$lib/images/mcdonalds/mcwings.png";
import milkshake from "$lib/images/mcdonalds/milkshake.png";
import orangejuice from "$lib/images/mcdonalds/orangejuice.png";

export const mcdonaldsImg = [applepie, bigmac, cola, fishburger, fries, icecream, mcnuggets, mcwings, milkshake, orangejuice];



export const defaultImgCategoriesArr = [
    { category: 'fruits',  arr : fruitImgs},
    { category: 'mcdonalds', arr : mcdonaldsImg }
];

export const imgCategoryNames:string[] = defaultImgCategoriesArr.map((category) => category.category);

const getCategory = (category: string) => defaultImgCategoriesArr.filter((record) => record.category == category).at(0)?.arr;

const getCategoriesWithIncludeList = (categoriesToInclude: string[]) => defaultImgCategoriesArr.filter((record) => !categoriesToInclude.some((catToInclude: string) => record.category === catToInclude));

export const getRandomCategory = (): string => defaultImgCategoriesArr[getRandomIndex(defaultImgCategoriesArr)].category;

export const getRandomIndexByCategory = (category: string): number => getRandomIndex(getCategory(category));

export const getImageByCategory = (category: string, index: number) => getCategory(category)?.at(index);