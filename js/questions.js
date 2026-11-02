/* Bank soal Past Tense (Simple Past).
   d = tingkat kesulitan (e=mudah 5%, m=sedang 10%, h=sulit 20%)
   o = pilihan jawaban, ISI PERTAMA SELALU JAWABAN BENAR (urutan diacak otomatis di app.js)
   ex = penjelasan singkat yang tampil setelah soal dijawab */
var QS=[
/* MUDAH (5%) */
{d:'e',q:'Yesterday, I ___ to the market.',o:['went','go','goes','going'],ex:'Yesterday menandakan masa lampau. Bentuk lampau (V2) dari go adalah went.'},
{d:'e',q:'She ___ a student last year.',o:['was','were','is','be'],ex:'Subjek she memakai was di past tense.'},
{d:'e',q:'They ___ football last Sunday.',o:['played','play','plays','playing'],ex:'Verb beraturan ditambah -ed: play menjadi played.'},
{d:'e',q:'We ___ happy yesterday.',o:['were','was','are','is'],ex:'We, you, they memakai were di past tense.'},
{d:'e',q:'He ___ a letter yesterday.',o:['wrote','write','writes','writing'],ex:'Verb tidak beraturan: write menjadi wrote.'},
{d:'e',q:'I ___ breakfast at six o\'clock this morning.',o:['had','have','has','having'],ex:'Verb tidak beraturan: have menjadi had.'},
{d:'e',q:'My mother ___ dinner last night.',o:['cooked','cook','cooks','cooking'],ex:'Verb beraturan ditambah -ed: cook menjadi cooked.'},
{d:'e',q:'The cat ___ on the sofa yesterday.',o:['slept','sleep','sleeps','sleeping'],ex:'Verb tidak beraturan: sleep menjadi slept.'},
{d:'e',q:'It ___ very hot yesterday.',o:['was','were','is','am'],ex:'It memakai was di past tense.'},
{d:'e',q:'You ___ late for school yesterday.',o:['were','was','are','is'],ex:'You selalu memakai were di past tense.'},
{d:'e',q:'I ___ my homework last night.',o:['did','do','does','doing'],ex:'Bentuk lampau dari do adalah did.'},
{d:'e',q:'She ___ a beautiful song last week.',o:['sang','sing','sings','singing'],ex:'Verb tidak beraturan: sing menjadi sang.'},
{d:'e',q:'We ___ a movie last Saturday.',o:['watched','watch','watches','watching'],ex:'Verb beraturan ditambah -ed: watch menjadi watched.'},
{d:'e',q:'Dina ___ a new bag yesterday.',o:['bought','buy','buys','buying'],ex:'Verb tidak beraturan: buy menjadi bought.'},
/* SEDANG (10%) */
{d:'m',q:'Tom ___ English hard last night.',o:['studied','studyed','studys','study'],ex:'Verb berakhiran konsonan + y: ubah y menjadi ied (study menjadi studied).'},
{d:'m',q:'She didn\'t ___ the door.',o:['open','opened','opens','opening'],ex:'Setelah didn\'t, verb kembali ke bentuk dasar (V1).'},
{d:'m',q:'___ you watch TV last night?',o:['Did','Do','Does','Were'],ex:'Kalimat tanya past tense dengan verb memakai Did.'},
{d:'m',q:'Which sentence is correct?',o:['He didn\'t go to school yesterday.','He didn\'t went to school yesterday.','He doesn\'t went to school yesterday.','He not went to school yesterday.'],ex:'Setelah didn\'t, pakai verb bentuk dasar: go, bukan went.'},
{d:'m',q:'The baby ___ all night.',o:['cried','cryed','cries','cry'],ex:'Verb berakhiran konsonan + y: cry menjadi cried.'},
{d:'m',q:'My parents and I ___ at home last night.',o:['were','was','are','is'],ex:'My parents and I = we, memakai were.'},
{d:'m',q:'___ she at school yesterday?',o:['Was','Were','Did','Is'],ex:'Kalimat tanya dengan be di masa lampau: Was untuk she, he, it.'},
{d:'m',q:'I ___ my keys yesterday, so I couldn\'t open the door.',o:['lost','lose','losted','losing'],ex:'Verb tidak beraturan: lose menjadi lost.'},
{d:'m',q:'Rina ___ me a nice gift on my birthday.',o:['gave','give','gived','gives'],ex:'Verb tidak beraturan: give menjadi gave.'},
{d:'m',q:'The students ___ not in the classroom yesterday.',o:['were','was','did','do'],ex:'Negatif be di masa lampau: were not. Did dipakai untuk verb biasa.'},
{d:'m',q:'I ___ not see him last week.',o:['did','do','was','were'],ex:'Negatif past tense dengan verb memakai did not (didn\'t).'},
{d:'m',q:'What time ___ you get up this morning?',o:['did','do','were','are'],ex:'Pertanyaan past tense dengan verb memakai did + subjek + V1.'},
{d:'m',q:'He ___ a very big fish yesterday.',o:['caught','catch','catched','catches'],ex:'Verb tidak beraturan: catch menjadi caught.'},
{d:'m',q:'They ___ their grandmother last week.',o:['visited','visit','visits','visitting'],ex:'Verb beraturan ditambah -ed: visit menjadi visited.'},
/* SULIT (20%) */
{d:'h',q:'Did she ___ the answer yesterday?',o:['know','knew','knows','known'],ex:'Setelah Did, verb kembali ke bentuk dasar: know.'},
{d:'h',q:'Which part is wrong? "Did he went to school yesterday?"',o:['went','Did','to school','yesterday'],ex:'Setelah Did, verb kembali ke bentuk dasar: Did he go to school yesterday?'},
{d:'h',q:'My friends and I ___ to the library last Friday.',o:['went','go','goes','gone'],ex:'Last Friday = masa lampau. Gunakan V2: went (gone adalah V3).'},
{d:'h',q:'The thief ___ the money and ran away.',o:['stole','stealed','steal','stolen'],ex:'Verb tidak beraturan: steal, stole, stolen. Past tense memakai stole.'},
{d:'h',q:'She ___ any money yesterday, so she bought nothing.',o:['didn\'t have','didn\'t had','doesn\'t have','hadn\'t have'],ex:'Setelah didn\'t, pakai have (V1), bukan had.'},
{d:'h',q:'Last month, we ___ a trip to Yogyakarta.',o:['took','take','taked','taken'],ex:'Verb tidak beraturan: take menjadi took (taken adalah V3).'},
{d:'h',q:'___ your parents come to school last week?',o:['Did','Do','Were','Does'],ex:'Your parents + verb come di masa lampau memakai Did.'},
{d:'h',q:'Budi played the guitar at the party. Make a question: ___ Budi ___ the guitar at the party?',o:['Did ... play','Did ... played','Was ... play','Do ... played'],ex:'Did + subjek + verb dasar: Did Budi play the guitar?'},
{d:'h',q:'The movie ___ at 7 p.m. and ended at 9 p.m.',o:['began','begun','begin','begined'],ex:'Verb tidak beraturan: begin, began, begun. Past tense memakai began.'},
{d:'h',q:'Which sentence is correct?',o:['I didn\'t see him yesterday.','I didn\'t saw him yesterday.','I don\'t saw him yesterday.','I not see him yesterday.'],ex:'Setelah didn\'t, pakai see (V1), bukan saw.'},
{d:'h',q:'"Did he finish his work?" "No, ___."',o:['he didn\'t','he doesn\'t','he wasn\'t','he not'],ex:'Jawaban singkat mengulang kata bantu: No, he didn\'t.'},
{d:'h',q:'The students ___ their uniforms last Monday.',o:['wore','wear','weared','worn'],ex:'Verb tidak beraturan: wear, wore, worn. Past tense memakai wore.'},
{d:'h',q:'She ___ her wallet in the taxi yesterday.',o:['left','leave','leaved','lefted'],ex:'Verb tidak beraturan: leave menjadi left.'},
{d:'h',q:'There ___ two books on the table yesterday.',o:['were','was','are','is'],ex:'There were dipakai untuk benda jamak di masa lampau.'}
];
