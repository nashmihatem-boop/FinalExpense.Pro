// Reference guidance on how simplified-issue underwriting typically classifies common health
// conditions for final expense insurance applicants. The material reflects broad, recurring
// patterns observed across the marketplace — it does not constitute a guarantee, a medical
// opinion, or the stated policy of any specific carrier. Each carrier establishes its own
// application questions and look-back periods, and actual eligibility is always subject to full
// underwriting review of the applicant's complete history. This content addresses insurance
// underwriting practice; it is not medical advice.
//
// Deliberately excluded: a carrier-by-carrier comparison table identifying which named companies
// accept which conditions, and specific premium figures. Producing either would require verified,
// current data on the underwriting rules and pricing of named commercial entities, which is not
// something to represent on a general-audience site. A licensed agent is the appropriate source
// for that level of detail.

export type Tier = "level" | "time-dependent" | "graded-modified" | "guaranteed";

export const TIER_INFO: Record<Tier, { label: string; blurb: string }> = {
  level: {
    label: "Generally Level Classification",
    blurb: "Applicants presenting this condition in a stable, well-managed state typically qualify for full day-one coverage with at least one carrier in the marketplace.",
  },
  "time-dependent": {
    label: "Timing-Dependent Classification",
    blurb: "Classification is determined largely by the elapsed time since onset and by the severity present at diagnosis; depending on those two factors, an applicant may be placed at level or at graded status.",
  },
  "graded-modified": {
    label: "Graded or Modified Classification",
    blurb: "Insurability is typical, though carriers commonly impose a waiting period before the full benefit becomes payable for a natural-cause death.",
  },
  guaranteed: {
    label: "Frequently Guaranteed-Acceptance Only",
    blurb: "This condition constitutes a disqualifying factor for simplified-issue underwriting at most carriers; the guaranteed-acceptance path, subject to its standard two-year waiting period, represents the typical outcome.",
  },
};

// The general categories nearly every simplified-issue application asks about, regardless of
// which specific condition is involved. Genuinely common across the market, not tied to one
// carrier's proprietary question wording.
export const COMMON_QUESTION_CATEGORIES: { question: string; why: string }[] = [
  { question: "When were you first diagnosed?", why: "The date of diagnosis determines which carrier-specific look-back window applies, placing the application inside or outside its boundaries." },
  { question: "Is it currently controlled or stable?", why: "A condition that is currently stable and well-managed is evaluated on materially different terms than one that has recently changed or is worsening." },
  { question: "Have you been hospitalized or had a related procedure recently?", why: "A recent hospitalization or related procedure ranks among the most heavily weighted signals in an underwriter's assessment." },
  { question: "What medications do you take for it?", why: "Carriers verify reported medications against prescription records, so accuracy on this point is essential." },
  { question: "Have you had any related complications?", why: "Complications arising from a condition are frequently a more significant underwriting factor than the base diagnosis itself." },
];

export type Scenario = { situation: string; outcome: string };

export type ConditionFact = {
  slug: string;
  name: string;
  tier: Tier;
  note: string;
  scenarios: Scenario[];
  medications?: { name: string; note: string }[];
};

export const CONDITIONS: ConditionFact[] = [
  { slug: "adl-limitations", name: "ADL Limitations", tier: "guaranteed", note: "A demonstrated need for routine assistance with daily activities such as bathing or dressing is regarded by most carriers as a significant risk indicator.",
    scenarios: [
      { situation: "Occasional assistance with one or two tasks, otherwise independent", outcome: "May still qualify for level or graded classification with an appropriate carrier" },
      { situation: "Regular assistance required across multiple daily activities", outcome: "Typically guaranteed-acceptance classification" },
    ] },
  { slug: "alcohol-use-history", name: "Alcohol-Use History", tier: "time-dependent", note: "Treatment completed in the recent past typically necessitates a waiting period, whereas an extended, stable record of sobriety is generally regarded more favorably.",
    scenarios: [
      { situation: "5+ years of sobriety, with no related health complications", outcome: "Frequently level classification" },
      { situation: "Treatment or a related hospitalization within the preceding 1–2 years", outcome: "Typically graded, modified, or guaranteed-acceptance classification" },
    ] },
  { slug: "aortic-aneurysm", name: "Aortic Aneurysm", tier: "time-dependent", note: "Underwriting options broaden considerably once surgical repair has been completed and roughly two years have elapsed without incident.",
    scenarios: [
      { situation: "Repaired 2+ years ago, stable since", outcome: "Frequently level classification with select carriers" },
      { situation: "Diagnosed recently, or not yet surgically repaired", outcome: "Typically graded or modified classification" },
    ] },
  { slug: "asthma", name: "Asthma", tier: "level", note: "When well controlled and not requiring supplemental oxygen, this condition rarely has any bearing on the underwriting outcome.",
    scenarios: [
      { situation: "Managed through inhaler use, with no supplemental oxygen required", outcome: "Nearly always level classification" },
      { situation: "Frequent exacerbations or emergency-department visits", outcome: "May shift to graded classification with some carriers" },
    ] },
  { slug: "afib", name: "Atrial Fibrillation (AFib)", tier: "level", note: "Once stabilized and under active treatment, this diagnosis is commonly accepted at level rates.",
    scenarios: [
      { situation: "Controlled through medication, with no other heart conditions present", outcome: "Typically level classification" },
      { situation: "Recently diagnosed, or presenting alongside other cardiac issues", outcome: "May shift to graded or modified classification" },
    ] },
  { slug: "bipolar-disorder", name: "Bipolar Disorder", tier: "level", note: "This diagnosis is generally evaluated on the same basis as other well-managed mental health conditions and is commonly accepted.",
    scenarios: [
      { situation: "Stabilized on medication, with no recent hospitalization", outcome: "Typically level classification" },
      { situation: "Recent hospitalization, or a recent change in medication", outcome: "May shift to graded or modified classification" },
    ] },
  { slug: "blood-clots-dvt-pe", name: "Blood Clots / DVT / PE", tier: "level", note: "This history is frequently unproblematic, though the underlying reason for anticoagulant therapy carries more underwriting weight than the clotting event itself.",
    scenarios: [
      { situation: "A single prior event, since resolved and stable", outcome: "Frequently level classification" },
      { situation: "Recurring clotting events, or an unresolved underlying condition", outcome: "May shift to graded or modified classification" },
    ] },
  { slug: "bypass-surgery", name: "Bypass Surgery", tier: "time-dependent", note: "Level coverage becomes commonly available at approximately one year following surgery, provided stability has been maintained.",
    scenarios: [
      { situation: "12+ months post-surgery, stable, with no further procedures", outcome: "Frequently level classification" },
      { situation: "Within the preceding year, or additional procedures performed since", outcome: "Typically graded or modified classification" },
    ] },
  { slug: "cancer-history", name: "Cancer History", tier: "time-dependent", note: "Numerous carriers extend full coverage eligibility at approximately the two-year remission mark; active treatment or metastatic spread typically points toward guaranteed-acceptance classification.",
    scenarios: [
      { situation: "2+ years in remission, with no recurrence", outcome: "Frequently level classification with several carriers" },
      { situation: "Currently undergoing treatment, or diagnosed within the preceding year", outcome: "Typically guaranteed-acceptance classification" },
    ] },
  { slug: "chronic-pancreatitis", name: "Chronic Pancreatitis", tier: "graded-modified", note: "This diagnosis frequently results in graded classification; an associated history of alcohol use can narrow the available options further.",
    scenarios: [
      { situation: "Managed, with infrequent flare-ups", outcome: "Frequently graded classification" },
      { situation: "Frequent flare-ups, or a history of hospitalization", outcome: "May shift to modified or guaranteed-acceptance classification" },
    ] },
  { slug: "cirrhosis-liver-disease", name: "Cirrhosis / Liver Disease", tier: "level", note: "Milder presentations are frequently unproblematic, while liver failure or a transplant recommendation indicates a considerably longer waiting period.",
    scenarios: [
      { situation: "Early-stage diagnosis, stable, with no complications", outcome: "May qualify for level classification" },
      { situation: "Advanced disease, or a transplant recommendation on record", outcome: "Typically guaranteed-acceptance classification" },
    ] },
  { slug: "congestive-heart-failure", name: "Congestive Heart Failure", tier: "guaranteed", note: "A waiting period is nearly unavoidable for applicants carrying this diagnosis.",
    scenarios: [
      { situation: "Mild presentation, well-managed (lower classification)", outcome: "Occasionally graded classification with select carriers" },
      { situation: "Moderate to advanced presentation", outcome: "Typically guaranteed-acceptance classification" },
    ] },
  { slug: "copd", name: "COPD", tier: "graded-modified", note: "Certain carriers continue to offer level rates for this diagnosis; a requirement for home oxygen, however, constitutes a near-universal disqualifying factor.",
    scenarios: [
      { situation: "Mild presentation, managed with inhalers, no oxygen required", outcome: "May qualify for level classification with select carriers" },
      { situation: "Home oxygen use required", outcome: "Nearly always guaranteed-acceptance classification" },
    ],
    medications: [{ name: "Albuterol, Spiriva, Symbicort", note: "These are standard maintenance inhalers, generally interpreted as evidence of a managed, moderate-severity case." }] },
  { slug: "crohns-colitis-ibd", name: "Crohn's / Colitis (IBD)", tier: "level", note: "This diagnosis is commonly accepted for coverage when it is under active medical management.",
    scenarios: [
      { situation: "Managed through medication, currently in remission", outcome: "Typically level classification" },
      { situation: "Active flare-ups, or a recent surgical procedure", outcome: "May shift to graded classification" },
    ] },
  { slug: "dementia-alzheimers", name: "Dementia or Alzheimer's", tier: "guaranteed", note: "This diagnosis constitutes a disqualifying factor for simplified-issue underwriting; this entry is typically consulted by a family member acting on the applicant's behalf.",
    scenarios: [
      { situation: "Early-stage diagnosis, with mild cognitive impairment", outcome: "Occasionally graded classification with select carriers" },
      { situation: "Moderate to advanced diagnosis", outcome: "Nearly always guaranteed-acceptance classification" },
    ] },
  { slug: "depression-anxiety", name: "Depression or Anxiety", tier: "level", note: "Coverage is very commonly granted when the condition is under active treatment.",
    scenarios: [
      { situation: "Managed through medication or therapy, currently stable", outcome: "Typically level classification" },
      { situation: "Recent hospitalization, or a documented history of self-harm", outcome: "May shift to graded or guaranteed-acceptance classification" },
    ],
    medications: [{ name: "Zoloft, Lexapro, Wellbutrin", note: "These are common, stable prescriptions, generally regarded as routine rather than as a cause for concern." }] },
  { slug: "diabetes", name: "Diabetes", tier: "level", note: "Stable, well-controlled type 2 diabetes remains among the conditions most likely to retain level classification; the presence of complications, however, can shift the applicable tier.",
    scenarios: [
      { situation: "Controlled through diet, oral medication, or insulin, with no complications present", outcome: "Frequently level classification, at times even at standard non-diabetic rates" },
      { situation: "Complications such as neuropathy or retinopathy present, otherwise stable", outcome: "Frequently remains level classification with an appropriate carrier; at times graded" },
      { situation: "Insulin shock, diabetic coma, or amputation within the preceding 2 years", outcome: "Typically graded, modified, or guaranteed-acceptance classification" },
    ],
    medications: [
      { name: "Metformin, glipizide, Januvia", note: "These common oral medications are generally interpreted as indicating well-managed type 2 diabetes." },
      { name: "Insulin (Lantus, Novolog, and similar)", note: "Insulin use signals a more advanced or longer-standing case of diabetes; many carriers nonetheless continue to offer level coverage." },
    ] },
  { slug: "diabetic-amputation", name: "Diabetic Amputation", tier: "time-dependent", note: "Level coverage becomes attainable again with greater frequency after approximately two years of demonstrated stability.",
    scenarios: [
      { situation: "2+ years since amputation, stable, with no further complications", outcome: "Frequently level classification with select carriers" },
      { situation: "Within the preceding 2 years", outcome: "Typically graded, modified, or guaranteed-acceptance classification" },
    ] },
  { slug: "enlarged-prostate", name: "Enlarged Prostate", tier: "level", note: "This diagnosis rarely has a material effect on the underwriting outcome in either direction.",
    scenarios: [{ situation: "A typical presentation, whether managed or unmanaged", outcome: "Nearly always level classification" }] },
  { slug: "epilepsy-seizures", name: "Epilepsy / Seizures", tier: "level", note: "This diagnosis is commonly accepted for coverage, particularly where seizures are controlled through medication.",
    scenarios: [
      { situation: "Seizure-free for 1+ years on a stable medication regimen", outcome: "Typically level classification" },
      { situation: "A recent seizure, or a recent change in medication", outcome: "May shift to graded classification" },
    ],
    medications: [{ name: "Keppra, Dilantin, Lamictal", note: "Carriers place greater weight on the duration of seizure-free status than on the specific medication prescribed." }] },
  { slug: "fibromyalgia", name: "Fibromyalgia", tier: "level", note: "This condition is commonly accepted for coverage.",
    scenarios: [{ situation: "A typical presentation, whether managed or unmanaged", outcome: "Typically level classification" }] },
  { slug: "heart-attack", name: "Heart Attack", tier: "time-dependent", note: "Level coverage commonly becomes available again at approximately the one-year mark, provided stability has been maintained since the event.",
    scenarios: [
      { situation: "12+ months out, stable, with no further cardiac events", outcome: "Frequently level classification with select carriers" },
      { situation: "Within the preceding 12 months", outcome: "Typically graded or modified classification" },
    ] },
  { slug: "heart-valve-disease", name: "Heart Valve Disease", tier: "time-dependent", note: "A recent diagnosis or repair typically necessitates a waiting period before full coverage becomes available.",
    scenarios: [
      { situation: "Repaired and stable, 1+ years out", outcome: "Frequently level classification with select carriers" },
      { situation: "Recently diagnosed, or recently repaired", outcome: "Typically graded or modified classification" },
    ] },
  { slug: "hepatitis-c", name: "Hepatitis C", tier: "level", note: "A broader range of carriers becomes available once the condition has been successfully treated and cleared from the system.",
    scenarios: [
      { situation: "Treated and cleared, with an undetectable viral load", outcome: "Frequently level classification" },
      { situation: "Currently active, or untreated", outcome: "May shift to graded or modified classification" },
    ] },
  { slug: "high-blood-pressure", name: "High Blood Pressure", tier: "level", note: "This is among the most frequently encountered conditions in underwriting; when controlled, it is generally treated as routine.",
    scenarios: [{ situation: "Controlled through medication or lifestyle measures", outcome: "Nearly always level classification" }],
    medications: [{ name: "Lisinopril, losartan, amlodipine", note: "These are extremely common prescriptions, generally treated as routine on their own merits." }] },
  { slug: "high-cholesterol", name: "High Cholesterol", tier: "level", note: "This factor rarely arises as a concern in the underwriting process at all.",
    scenarios: [{ situation: "A typical presentation, whether treated or untreated", outcome: "Nearly always level classification" }],
    medications: [{ name: "Statins (Lipitor, Crestor, and similar)", note: "These are extremely common prescriptions and generally present no issue for underwriting purposes." }] },
  { slug: "hiv-aids", name: "HIV / AIDS", tier: "graded-modified", note: "A well-managed HIV diagnosis may qualify for partial coverage, whereas an AIDS diagnosis tends toward guaranteed-acceptance classification.",
    scenarios: [
      { situation: "HIV diagnosis, well-managed, with an undetectable viral load", outcome: "May qualify for graded classification with select carriers" },
      { situation: "AIDS diagnosis", outcome: "Typically guaranteed-acceptance classification" },
    ] },
  { slug: "home-oxygen", name: "Home Oxygen", tier: "guaranteed", note: "This is a near-automatic disqualifying factor, with the exception of oxygen prescribed specifically for treated sleep apnea.",
    scenarios: [
      { situation: "Oxygen use limited to treated sleep apnea", outcome: "Frequently remains level or graded classification" },
      { situation: "Oxygen use attributable to a lung or heart condition", outcome: "Nearly always guaranteed-acceptance classification" },
    ] },
  { slug: "kidney-disease", name: "Kidney Disease", tier: "level", note: "Earlier-stage kidney disease is frequently unproblematic; dialysis or kidney failure, by contrast, indicates a waiting period.",
    scenarios: [
      { situation: "Early-stage diagnosis, stable, with no dialysis required", outcome: "Frequently level classification" },
      { situation: "Currently on dialysis, or in kidney failure", outcome: "Typically guaranteed-acceptance classification" },
    ] },
  { slug: "lupus", name: "Lupus", tier: "level", note: "Several carriers extend level coverage for this diagnosis; more severe or active presentations may instead receive graded classification.",
    scenarios: [
      { situation: "Mild presentation, well-managed, with infrequent flares", outcome: "Frequently level classification with select carriers" },
      { situation: "Active disease, or involvement of major organs", outcome: "Typically graded or modified classification" },
    ] },
  { slug: "multiple-sclerosis", name: "Multiple Sclerosis", tier: "level", note: "Level coverage is available through a number of carriers; a significant need for assistance with daily activities can indicate a waiting period instead.",
    scenarios: [
      { situation: "Stable condition, independent function, mild symptoms", outcome: "Frequently level classification with select carriers" },
      { situation: "Significant mobility limitations, or assistance required with daily activities", outcome: "Typically graded or guaranteed-acceptance classification" },
    ] },
  { slug: "neuropathy", name: "Neuropathy", tier: "level", note: "This diagnosis is frequently unproblematic in isolation; certain carriers apply graded classification when it presents as a complication of diabetes.",
    scenarios: [
      { situation: "Mild presentation, not attributable to a more serious underlying condition", outcome: "Typically level classification" },
      { situation: "Presenting as a complication of advancing diabetes or another condition", outcome: "May shift to graded classification" },
    ] },
  { slug: "obesity-bmi-over-40", name: "Obesity / BMI Over 40", tier: "level", note: "A number of carriers do not factor build into simplified-issue underwriting at all.",
    scenarios: [{ situation: "A typical presentation, with or without related conditions present", outcome: "Frequently remains level classification with an appropriate carrier" }] },
  { slug: "organ-transplant", name: "Organ Transplant", tier: "time-dependent", note: "Available options expand with greater elapsed time since the transplant; a more recent transplant typically corresponds to a longer waiting period.",
    scenarios: [
      { situation: "5+ years post-transplant, stable", outcome: "May qualify for level classification with select carriers" },
      { situation: "Within the preceding few years, or currently on a transplant waiting list", outcome: "Typically guaranteed-acceptance classification" },
    ] },
  { slug: "osteoporosis", name: "Osteoporosis", tier: "level", note: "This diagnosis rarely has a bearing on the underwriting outcome.",
    scenarios: [{ situation: "A typical presentation, treated or untreated", outcome: "Nearly always level classification" }] },
  { slug: "pacemaker-defibrillator", name: "Pacemaker / Defibrillator", tier: "time-dependent", note: "Level coverage is common at approximately one year post-placement; an underlying heart-failure diagnosis alters this outcome.",
    scenarios: [
      { situation: "12+ months since placement, stable, with no heart-failure diagnosis present", outcome: "Frequently level classification" },
      { situation: "Recently placed, or an underlying heart-failure diagnosis present", outcome: "Typically graded or guaranteed-acceptance classification" },
    ] },
  { slug: "parkinsons-disease", name: "Parkinson's Disease", tier: "level", note: "Level coverage is available with some carriers; significant mobility limitations can instead indicate a waiting period.",
    scenarios: [
      { situation: "Early-stage diagnosis, independent function, mild symptoms", outcome: "Frequently level classification with select carriers" },
      { situation: "Significant mobility limitations, or wheelchair use", outcome: "Typically graded or guaranteed-acceptance classification" },
    ] },
  { slug: "peripheral-artery-disease", name: "Peripheral Artery Disease", tier: "level", note: "This diagnosis is frequently unproblematic; recent vascular surgery can shift the outcome toward a waiting period.",
    scenarios: [
      { situation: "Managed through medication, with no recent surgery", outcome: "Frequently level classification" },
      { situation: "Recent vascular surgery, or amputation", outcome: "Typically graded or modified classification" },
    ] },
  { slug: "rheumatoid-arthritis", name: "Rheumatoid Arthritis", tier: "level", note: "This condition is commonly accepted for coverage.",
    scenarios: [{ situation: "Managed through medication", outcome: "Typically level classification" }] },
  { slug: "sarcoidosis", name: "Sarcoidosis", tier: "level", note: "This condition is commonly accepted for coverage where it does not involve oxygen use.",
    scenarios: [
      { situation: "Mild presentation, no oxygen use required", outcome: "Typically level classification" },
      { situation: "Home oxygen required", outcome: "Typically guaranteed-acceptance classification" },
    ] },
  { slug: "sleep-apnea", name: "Sleep Apnea", tier: "level", note: "When treated with a CPAP device, this diagnosis is usually a non-issue rather than a cause for concern.",
    scenarios: [
      { situation: "Diagnosed and actively using a CPAP device", outcome: "Nearly always level classification" },
      { situation: "Diagnosed but currently untreated", outcome: "May shift to graded classification with some carriers" },
    ] },
  { slug: "smokers-tobacco-users", name: "Smokers & Tobacco Users", tier: "level", note: "Tobacco use affects the applicable rate rather than eligibility itself; day-one coverage remains available, at a tobacco-rated premium.",
    scenarios: [{ situation: "A typical presentation", outcome: "Level classification at a tobacco-rated premium" }] },
  { slug: "social-security-disability", name: "Social Security Disability", tier: "time-dependent", note: "Classification follows the underlying diagnosis itself rather than the disability status in isolation.",
    scenarios: [{ situation: "Determined entirely by the underlying condition", outcome: "Refer to that condition's individual entry" }] },
  { slug: "stent-placement", name: "Stent Placement", tier: "time-dependent", note: "Level coverage commonly becomes available again at approximately one year following the procedure, provided stability has been maintained.",
    scenarios: [
      { situation: "12+ months since the procedure, stable, with no additional procedures performed", outcome: "Frequently level classification" },
      { situation: "Within the preceding 12 months", outcome: "Typically graded or modified classification" },
    ] },
  { slug: "stroke", name: "Stroke", tier: "time-dependent", note: "Level coverage commonly becomes available at approximately one year post-event; a transient ischemic attack, or mini-stroke, is often evaluated more leniently.",
    scenarios: [
      { situation: "12+ months since the event, stable, or a TIA (mini-stroke) diagnosis", outcome: "Frequently level classification with select carriers" },
      { situation: "Within the preceding 12 months, or recurring events", outcome: "Typically graded or modified classification" },
    ] },
  { slug: "thyroid-disease", name: "Thyroid Disease", tier: "level", note: "This condition is commonly accepted for coverage.",
    scenarios: [{ situation: "Managed through medication", outcome: "Nearly always level classification" }],
    medications: [{ name: "Levothyroxine (Synthroid)", note: "This is an extremely common prescription and generally presents no issue for underwriting purposes." }] },
];

export function findCondition(slug: string): ConditionFact | undefined {
  return CONDITIONS.find((c) => c.slug === slug);
}

// Groups the A–Z list by body system / condition type for the browse-by-condition widgets.
// A different axis than Tier above (which groups by underwriting outcome) — this one is purely
// for scanability, so visitors can jump to the area relevant to them instead of reading straight
// down an alphabetical wall.
export const CONDITION_CATEGORIES: { label: string; slugs: string[] }[] = [
  { label: "Heart & Circulatory", slugs: [
    "aortic-aneurysm", "afib", "blood-clots-dvt-pe", "bypass-surgery", "congestive-heart-failure",
    "heart-attack", "heart-valve-disease", "high-blood-pressure", "high-cholesterol",
    "pacemaker-defibrillator", "peripheral-artery-disease", "stent-placement", "stroke",
  ] },
  { label: "Respiratory", slugs: ["asthma", "copd", "home-oxygen", "sleep-apnea", "smokers-tobacco-users"] },
  { label: "Diabetes & Metabolic", slugs: ["diabetes", "diabetic-amputation", "obesity-bmi-over-40", "thyroid-disease"] },
  { label: "Cancer", slugs: ["cancer-history"] },
  { label: "Neurological", slugs: ["dementia-alzheimers", "epilepsy-seizures", "multiple-sclerosis", "neuropathy", "parkinsons-disease"] },
  { label: "Mental & Behavioral Health", slugs: ["alcohol-use-history", "bipolar-disorder", "depression-anxiety"] },
  { label: "Digestive & Liver", slugs: ["chronic-pancreatitis", "cirrhosis-liver-disease", "crohns-colitis-ibd", "hepatitis-c"] },
  { label: "Kidney, Organs & Immune", slugs: ["kidney-disease", "organ-transplant", "hiv-aids"] },
  { label: "Autoimmune & Joint", slugs: ["fibromyalgia", "lupus", "osteoporosis", "rheumatoid-arthritis", "sarcoidosis"] },
  { label: "Other", slugs: ["adl-limitations", "enlarged-prostate", "social-security-disability"] },
];
