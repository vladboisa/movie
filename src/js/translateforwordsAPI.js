export default async function translateWords (words) {
if (words) {
    const apiKey = `trnsl.1.1.20200502T162614Z.f5854060a41d5297.0db50115084ff69045b58e5008b2ec4fc0c6b3b7`;
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${apiKey}&text=${words}&lang=ru-en`;
    const results = await fetch(url);
    const data = await results.json();
    return data.text[0];
}
return words;
}