export default function returnHowManyArguments(...theArgs) {
        let count = 0;

        for (const arg of theArgs)
        {
                count = count + 1;
        }

        return (count);
}
