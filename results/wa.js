<script>
// Create the button element
const cornerButton = document.createElement('button');
cornerButton.innerHTML = 'Sasa Angalia Matokeo Mengine Bila Kushare Hapa';
cornerButton.id = 'whatsapp-corner-btn';

// WhatsApp channel URL (replace with your actual channel URL)
const whatsappChannelUrl = 'https://whatsapp.com/channel/your-channel-link-here';

// Add click event to open WhatsApp channel
cornerButton.addEventListener('click', function() {
    window.open(whatsappChannelUrl, '_blank');
});

// Style the button
cornerButton.style.position = 'fixed';
cornerButton.style.bottom = '20px';
cornerButton.style.right = '20px';
cornerButton.style.backgroundColor = '#25D366'; // WhatsApp green
cornerButton.style.color = 'white';
cornerButton.style.border = 'none';
cornerButton.style.borderRadius = '25px';
cornerButton.style.padding = '12px 20px';
cornerButton.style.fontSize = '14px';
cornerButton.style.fontWeight = 'bold';
cornerButton.style.cursor = 'pointer';
cornerButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
cornerButton.style.zIndex = '1000';
cornerButton.style.maxWidth = '300px';
cornerButton.style.textAlign = 'center';
cornerButton.style.lineHeight = '1.4';

// Add hover effects
cornerButton.addEventListener('mouseenter', function() {
    this.style.backgroundColor = '#128C7E';
    this.style.transform = 'scale(1.05)';
});

cornerButton.addEventListener('mouseleave', function() {
    this.style.backgroundColor = '#25D366';
    this.style.transform = 'scale(1)';
});

// Add to page
document.body.appendChild(cornerButton);

// Make sure button is visible even if page loads slowly
document.addEventListener('DOMContentLoaded', function() {
    document.body.appendChild(cornerButton);
});
</script>