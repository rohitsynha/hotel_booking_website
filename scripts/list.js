
$(function() {
    $('.views-list-item').click(function() {
        const selectedClass = "btn-primary";
        const btn = $(this);
        const id = btn.attr("id");
        console.log(id)
        const viewId = id.split('-').slice(0, -1).join('-');
    
        if (btn.hasClass(selectedClass)) {
            return;
        }
    
        $('.views-list-item').removeClass(selectedClass);
    
        $('.view-content').hide();
        $(`#${viewId}`).show();
    
        btn.addClass(selectedClass);
    });
});
