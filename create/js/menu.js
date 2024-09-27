window.onload = function() {
    var menuLinks = [
        '<li><a href="https://grcodeclub.gr">Αρχική Σελίδα</a></li>',
        '<li><a href="https://grcodeclub.gr/more/create/">Manual</a></li>',
        '<li><a href="https://grcodeclub.gr/more/create/github">GitHub</a></li>',
        '<li><a href="https://grcodeclub.gr/more/create/google">Υπηρεσίες Google</a></li>',
        '<li style="height: 200px;"></li>'
    ];
    
    var $sidebarMenuInners = document.querySelectorAll('.sidebarMenuInner');
$sidebarMenuInners.forEach(function($sidebarMenuInner) {
    menuLinks.forEach(function(link) {
        $sidebarMenuInner.insertAdjacentHTML('beforeend', link);
    });
});
};
