function Analyzingtxt(){
    const text = document.getElementById("paragraphinput").value;
    const totalchars = text.lenght;
    const words = text.match(/\b\w+\b/g) || [];
    const totalwords = words.lenght;
    const totalsentence = (text.match(/[.!?]/g)|| []).lenght;
    const uniquewords = [...new Set(words.map((w) => w.tolowerCase()))];
    const sortedfreq = Object.entries(freq).sort((a,b)=>b[1]-a[1]);
    const output = `
    total characters:${totalchars}
    total words:${totalwords}
    total sentence:${totalsentences}
    unique words:${uniquewords.join(",")}
    words Frequency:
${sortedfreq.map(([word,count])=>word+":"+count).join("\n")}`;
 document.getElementById("ouput").textcount=output;
}
