export const getWorksheetMsg = (numOfQuestions: number, totalPages: number): string => {
    if (totalPages == 0) { return ''; }
    return "Total ".concat(String(numOfQuestions))
        .concat((numOfQuestions > 1) ? ' questions' : ' question')
        .concat(' (')
        .concat(String(totalPages)
            .concat((totalPages > 1) ? ' pages' : ' page')
        ).concat(') ')
        .concat('are generated.');
}