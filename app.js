// שנה דינמית בפוטר
const y = document.getElementById('y');
if (y) y.textContent = new Date().getFullYear();

// טופס -> הודעת וואטסאפ עם פרטים
const form = document.getElementById('leadForm');
if (form) {
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const fd = new FormData(this);
    const name = fd.get('name') || '';
    const phone = fd.get('phone') || '';
    const topic = fd.get('topic') || '';
    const msg = fd.get('msg') || '';
    const athome = fd.get('athome') ? 'כן' : 'לא';
    const text =
`שם: ${name}
טלפון: ${phone}
נושא: ${topic}
בדיקה בבית הלקוח: ${athome}
הודעה: ${msg}`;
    const url = `https://wa.me/972504663663?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  });
}
