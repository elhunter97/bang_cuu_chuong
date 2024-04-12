let sout = "<table cellpadding='3' width='70  cellspacing='3' width='70' border='1'>";
for(let i =1;i<=9;i++){
    sout = sout + "<tr>";
    for(let j=2;j<=9;j++){
        sout = sout + "<td>"+j+"x"+i+"="+i*j+"</td>";
    }
    sout = sout + "</tr>";
}
sout = sout + "</table>";
document.write(sout);
