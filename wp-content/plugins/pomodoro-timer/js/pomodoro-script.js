jQuery(document).ready(function($) {
    var workTime = <?php echo get_option('pomodoro_work_time', 25); ?> * 60; // Default to 25 minutes
    var breakTime = <?php echo get_option('pomodoro_break_time', 5); ?> * 60; // Default to 5 minutes

    // Your JavaScript code for Pomodoro timer goes here
});