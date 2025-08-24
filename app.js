// year
document.getElementById('y').textContent = new Date().getFullYear();

// Simple lead form handler: build a WhatsApp prefilled message
document.getElementById('leadForm').addEventListener('submit', function(e){
  e.preventDefault();
  const fd = new FormData(this);
  const name = fd.get('name') || '';
  const phone = fd.get('phone') || '';
  const topic = fd.get('topic') || '';
  const msg = fd.get('msg') || '';
  const athome = fd.get('athome') ? 'כן' : 'לא';
  const text = `שם: ${name}\nטלפון: ${phone}\nנושא: ${topic}\nבדיקה בבית הלקוח: ${athome}\nהודעה: ${msg}`;
  const url = `https://wa.me/972504663663?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
});
