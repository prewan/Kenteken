export class Str {
    public static capitalizeWords(str: string): string {
        return str
            .toLowerCase()
            .split(' ')
            .map((word) => Str.capitalizeFirst(word))
            .join(' ');
    }

    public static capitalizeFirst(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}