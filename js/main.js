var myCodeMirror;
jQuery(function() {
    myCodeMirror = CodeMirror.fromTextArea(rconConsole);


    //TODO: Support up arrow, enter, etc
    $("#runCommand").click(function() {
        dewRcon.send(jQuery("#rconCommand").val());
        jQuery("#rconCommand").val("");
    });
});
