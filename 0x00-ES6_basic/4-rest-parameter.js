export default function returnHowManyArguments(...theArgs) {
        let count = 0;

        for (const arg of theArgs)
        {
                count += 1;
        }

        return (count);
}
