<?php
include 'connectdb.php';

header("Access-Control-Allow-Origin: *");

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

echo "<script>alert('message successfully sent');</script>";

//TI
$tin_area = $_POST[''];['tin_area'];
$tin_area_freq = $_POST[''];['tin_area_freq'];
$tin_onset = $_POST['tin_onset'];
$tin_when = $_POST['tin_when'];
$tin_fluctuations = $_POST['tin_fluctuations'];
$tin_desc_of_t_sound = $_POST['tin_desc_of_t_sound'];
$tin_activities_concentration = $_POST['tin_activities_concentration'];
$tin_activities_sleep = $_POST['tin_activities_sleep'];
$tin_activities_qra = $_POST['tin_activities_qra'];
$tin_activities_work = $_POST['tin_activities_work'];
$tin_activities_restaurants = $_POST['tin_activities_restaurants'];
$tin_activities_sports = $_POST['tin_activities_sports'];
$tin_activities_social = $_POST['tin_activities_social'];
$tin_activities_other  = $_POST['tin_activities_other'];
$tin_severity = $_POST['tin_severity'];
$tin_annoyance = $_POST['tin_annoyance'];
$tin_effectonlife = $_POST['tin_effectonlife'];
$tin_comments = $_POST['tin_comments'];
$tin_bd = $_POST['tin_bd'];
$tin_bd_freq = $_POST['tin_bd_freq'];
$tin_eff_of_sound = $_POST['tin_eff_of_sound'];
$tin_eof_how_long = $_POST['tin_eof_how_long'];
$tin_ear_over = $_POST['tin_ear_over'];
$tin_ear_over_perc = $_POST['tin_ear_over_perc'];
$tin_ear_over_inquiet = $_POST['tin_ear_over_inquiet'];
$tin_other_t_treat = $_POST['tin_other_t_treat'];
$tin_why_t_prob = $_POST['tin_why_t_prob'];

//ST
$st_oversensitivity = $_POST['st_oversensitivity'];
$st_phys_dis = $_POST['st_phys_dis'];
$st_desc_of_troub_sounds = $_POST['st_desc_of_troub_sounds'];
$st_activities_concerts = $_POST['st_activities_concerts'];
$st_activities_shopping = $_POST['st_activities_shopping'];
$st_activities_movies = $_POST['st_activities_movies'];
$st_activities_work = $_POST['st_activities_work'];
$st_activities_restaurants = $_POST['st_activities_restaurants'];
$st_activities_driving = $_POST['st_activities_driving'];
$st_activities_sports = $_POST['st_activities_sports'];
$st_activities_church = $_POST['st_activities_church'];
$st_activities_housekeeping = $_POST['st_activities_housekeeping'];
$st_activities_childcare = $_POST['st_activities_childcare'];
$st_activities_social = $_POST['st_activities_social'];
$st_activities_other = $_POST['st_activities_other'];
$st_severity = $_POST['st_severity'];
$st_annoyance = $_POST['st_annoyance'];
$st_effectonlife = $_POST['st_effectonlife'];
$st_comments = $_POST['st_comments'];
$st_bd = $_POST['st_bd'];
$st_bd_freq = $_POST['st_bd_freq'];
$st_eff_of_sound = $_POST['st_eff_of_sound'];
$st_eof_how_long = $_POST['st_eof_how_long'];
$st_ear_over = $_POST['st_ear_over'];
$st_ear_over_perc = $_POST['st_ear_over_perc'];
$st_ear_over_inquiet = $_POST['st_ear_over_inquiet'];
$st_other_st_treat = $_POST['st_other_st_treat'];
$st_why_st_prob = $_POST['st_why_st_prob'];

//HL
$hl_hearing_prob = $_POST['hl_hearing_prob'];
$hl_hearing_aid = $_POST['hl_hearing_aid'];
$hl_hearing_aid_type = $_POST['hl_hearing_aid_type'];
$hl_ever_rec = $_POST['hl_ever_rec'];
$hl_category = $_POST['hl_category'];
$hl_rec = $_POST['hl_rec'];

//Rank
$rank_tin = $_POST['rank_tin'];
$rank_st = $_POST['rank_st'];
$rank_hearing = $_POST['rank_hearing'];
$ptn_decision = $_POST['ptn_decision'];
$next_visit = $_POST['next_visit'];
$fui_tin_activities_changes = $_POST['fui_tin_activities_changes'];
$fui_st_activities_changes = $_POST['fui_st_activities_changes'];
$fui_problem_in_general = $_POST['fui_problem_in_general'];
$fui_glad_started = $_POST['fui_glad_started'];
$fui_main_prob_disc = $_POST['fui_main_prob_disc'];
$visit_visit_id = $_POST['visit_visit_id'];

$sqlinsert = "INSERT INTO interview values ($tin_area,$tin_area_freq,$tin_onset,$tin_when,$tin_fluctuations,$tin_desc_of_t_sound,$tin_activities_concentration,$tin_activities_sleep,$tin_activities_qra,$tin_activities_work,$tin_activities_restaurants,$tin_activities_sports,$tin_activities_social,$tin_activities_other,$tin_severity,$tin_annoyance,$tin_effectonlife,$tin_comments,$tin_bd,$tin_bd_freq,$tin_eff_of_sound,$tin_eof_how_long,$tin_ear_over,$tin_ear_over_perc,$tin_ear_over_inquiet,$tin_other_t_treat,$tin_why_t_prob,$st_oversensitivity,$st_phys_dis,$st_desc_of_troub_sounds,$st_activities_concerts,$st_activities_shopping,$st_activities_movies,$st_activities_work,$st_activities_restaurants,$st_activities_driving,$st_activities_sports,$st_activities_church,$st_activities_housekeeping,$st_activities_childcare,$st_activities_social,$st_activities_other,$st_severity,$st_annoyance,$st_effectonlife,$st_comments,$st_bd,$st_bd_freq,$st_eff_of_sound,$st_eof_how_long,$st_ear_over,$st_ear_over_perc,$st_ear_over_inquiet,$st_other_st_treat,$st_why_st_prob,$hl_hearing_prob,$hl_hearing_aid,$hl_hearing_aid_type,$hl_ever_rec,$hl_category,$hl_rec,$rank_tin,$rank_st,$rank_hearing,$ptn_decision,$next_visit,$fui_tin_activities_changes,$fui_st_activities_changes,$fui_problem_in_general,$fui_glad_started,$fui_main_prob_disc)";
$d = oci_parse($conn, $sqlinsert);
oci_execute($d);

$sql = 'INSERT INTO visit values($visit_id,$visit_number,$date,$thc,$clinic_clinic_number,$interview_id)';
$s = oci_parse($conn, $sql);
oci_execute($s);

echo "<script>alert('message successfully sent');</script>";

?>