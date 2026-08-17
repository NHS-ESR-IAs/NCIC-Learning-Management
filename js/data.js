/**
 * NCIC Learning & Development Hub - Central Data Store
 * ===================================================
 * To update, add or remove courses, categories, FAQs or guides,
 * simply edit the arrays below. No HTML or CSS changes required!
 */

const APP_CONFIG = {
  trustName: 'North Cumbria Integrated Care NHS Foundation Trust',
  shortName: 'NCIC',
  hubTitle: 'Learning & Development Hub',
  hubSubtitle: 'Course Catalogue, Compliance Guidance & ESR Booking Portal',
  supportEmail: 'learninganddevelopment@ncic.nhs.uk',
  lastUpdated: 'August 2026',
  version: '2.0.0'
};

const GUIDES_DATA = [
  {
    "title": "How to use the My Compliance Portlet",
    "url": "https://scribehow.com/embed/How_to_Use_the_Compliance_Portlet__9dOjYztbRxGKyPVBHEPkZg",
    "type": "scribe"
  },
  {
    "title": "PDF",
    "url": "https://my.esr.nhs.uk/dashboard/webdav/cumbria-partnership-nhs-trust-262-/document_library/L%26D/HowtoUsetheCompliancePortlet.pdf",
    "type": "pdf"
  },
  {
    "title": "Identifying Training that is Outstanding",
    "url": "https://scribehow.com/shared/How_to_Use_the_Compliance_Portlet_Copy__2Xdu0UgvQhKTuyWdU_F2lA#8eb876c4",
    "type": "scribe"
  },
  {
    "title": "Subscribing to a Certification",
    "url": "https://scribehow.com/shared/How_to_Use_the_Compliance_Portlet_Copy__2Xdu0UgvQhKTuyWdU_F2lA#e8ec4826",
    "type": "scribe"
  },
  {
    "title": "Playing e-Learning Courses you are Enrolled On",
    "url": "https://scribehow.com/shared/How_to_Use_the_Compliance_Portlet_Copy__2Xdu0UgvQhKTuyWdU_F2lA#684f48f5",
    "type": "scribe"
  },
  {
    "title": "Booking onto Classroom Training",
    "url": "https://scribehow.com/shared/How_to_Use_the_Compliance_Portlet_Copy__2Xdu0UgvQhKTuyWdU_F2lA#22b100c3",
    "type": "scribe"
  },
  {
    "title": "Viewing Details of Classes you are Booked On",
    "url": "https://scribehow.com/shared/How_to_Use_the_Compliance_Portlet_Copy__2Xdu0UgvQhKTuyWdU_F2lA#e023d1a4",
    "type": "scribe"
  }
];

const FAQS_DATA = [
  {
    "question": "I have completed\n                                                some training and my Compliance has not updated, what can I do?",
    "answer": "<p>\n                                                To ensure your training has been completed correctly, please check the\n                                                following.\n                                            </p>\n<ol>\n<li data-list-item-id=\"e6c9b7d9288e1e34401c42b738081e276\">\n                                                    Using the My Compliance portlet, check you are subscribed or\n                                                    renewing a certification. If not subscribe to the certification and\n                                                    allow 24 hours for your record to be updated.\n                                                </li>\n<li data-list-item-id=\"ed0a8b88037ca07c59ae5743d5f55e5b2\">\n                                                    On your learner home page, under e-learning enrolments check the\n                                                    status of the enrolment. If this is showing as incomplete, click the\n                                                    play button and complete the training, ensuring you click on the\n                                                    house to save your progress.\n                                                </li>\n</ol>\n<p>\n                                                If neither of these resolves the issue, please contact the Training\n                                                Team.\n                                            </p>\n<p>\n                                                \u00a0\n                                            </p>"
  },
  {
    "question": "What do I do if I\n                                                believe the My Compliance portlet is showing the incorrect subjects for\n                                                my role, including subjects that are missing.",
    "answer": "<p>\n                                                Discuss this with your manager and, if they agree that the subjects\n                                                should be changed, ask them to contact the Learning and Development team\n                                                indicating which subjects should be changed and why - this will then be\n                                                reviewed in conjunction with Subject Matter Experts and a decision made.\n                                            </p>"
  },
  {
    "question": "How do I review all\n                                                the training required for my job?",
    "answer": "<p>\n                                                Expand the Compliance Portlet and click on View My Compliance button.\n                                            </p>\n<p>\n                                                Subjects that are required will show as red, amber or green. Blue\n                                                competencies are additional training that you have completed but are not\n                                                currently required for your role.\n                                            </p>"
  },
  {
    "question": "Is mandatory\n                                                training that is completed in another organisation recognised by\n                                                NCIC?",
    "answer": "<p>\n                                                Training completed in other NHS organisations is automatically\n                                                transferred via ESR. For training that is not, please contact the\n                                                Learning and Development team with evidence of the training you want\n                                                recognised.\n                                            </p>"
  },
  {
    "question": "Can I complete\n                                                training whilst I am an applicant?",
    "answer": "<p>\n                                                You can use the My Compliance portlet to complete e-learning prior to\n                                                your start date if you wish.\n                                            </p>\n<p>\n                                                Face to face or virtual classes should not be booked until you have\n                                                started in post.\n                                            </p>"
  },
  {
    "question": "What do I do if my\n                                                certification subscription status is \"expired\"?",
    "answer": "<p>\n                                                Contact the Learning and Development team.\n                                            </p>"
  },
  {
    "question": "What do I do if the\n                                                play button in the my learner home page is greyed out?",
    "answer": "<p>\n                                                To resolve this access the learning via the My Compliance portlet.\n                                            </p>"
  }
];

const CATEGORIES_DATA = [
  {
    "name": "Clinical\n                                                Skills",
    "color": "#2F5597",
    "courses": [
      {
        "title": "262 Blood Glucose Monitoring and Delegated Administration\n                                                of Insulin",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=diGdmuTywMCUuZ-jihMS7w..&params=NChLaOkwtQDE-OipdiOGoYVvGXdP4he7xrt5alke8tDjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-1"
      },
      {
        "title": "262 Blood Glucose Monitoring and Delegated Administration\n                                                of Insulin (Delivered via Teams)",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=upsauiyX_BkvAuLuDIYihw..&params=ZKWgMUgpjlmtbmHXQuCiUnTrcLEwYlwuhLkXZfPtcWnjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-2"
      },
      {
        "title": "262 Blood Transfusion Training",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=QF7NTUsQpDAAge0q43H2kA..&params=6VTdvBvbCIG8KxeugqYf1ZLDIbiZodXp1P8Qt9rKh4Tjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-3"
      },
      {
        "title": "262 Catheterisation",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=bEvSgwGkauPEa_QcB9b5ew..&params=9EmF21XqoQrLyKhn5WTytFvf-HDkZyUeTtY0hzSOuMvjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-4"
      },
      {
        "title": "262 Catheterisation (Delivered via Teams)",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=upsauiyX_BkvAuLuDIYihw..&params=LiBbjEeeAmgupF54jpMh9I53P-IGsSVvPiKYo1SAIR7jqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-5"
      },
      {
        "title": "262 Clinical Skills - Sign Off Session",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=diGdmuTywMCUuZ-jihMS7w..&params=EA5qca0DYZFWoYIKIVDiNK9mVm8WW6hzqPh6sKdicuHjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-6"
      },
      {
        "title": "262 Venepuncture & Cannulation: Sign Off Session",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=irGHWdDnVIQnQJGepMHJsqW3YOCoGkzAQFdIpGnmmpDjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-7"
      },
      {
        "title": "262 VoED/Syringe Driver/CVAD: Sign Off Session",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=1&security_group_id=0&lang_code=US&params=NoM3y3lGH.dXN4jLJz4KsyXWN7RCfRgxtDrMbwdsVwbjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-8"
      },
      {
        "title": "262 Nasogastric & PEG Tubes: Sign Off Session",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=79NqGsAQiqtq5rMai-Y3q54kCHxYIOwlZNYUGEFc6.zjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-9"
      },
      {
        "title": "262 Catheterisation: Sign Off Session",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=gEU1KHTaAakwX2Gq-YRNYR9D.1LFTGKjgTdMu7cELEfjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-10"
      },
      {
        "title": "262 ECG Recording",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=diGdmuTywMCUuZ-jihMS7w..&params=PoOFQu06a3ajnp-JhTeBgNQo6Cy9Wlz-X5xC13e1KMPjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-11"
      },
      {
        "title": "262 ECG Recording (Delivered via Teams)",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=upsauiyX_BkvAuLuDIYihw..&params=FeYTxbLx3mq58MXThsflLDrMILWKeJ-lq7xw2BACHtXjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-12"
      },
      {
        "title": "262 Management of Central Venous Devices",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=diGdmuTywMCUuZ-jihMS7w..&params=hMF77N2wDAVK-N-zezp3HZ6GOdgJJiqWSpjbRelxt.Ljqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-13"
      },
      {
        "title": "262 Management of Central Venous Devices (Delivered via\n                                                Teams)",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=upsauiyX_BkvAuLuDIYihw..&params=WXnw-FNQ2EYfBaAkOM8FCudrr3mCZrqPuqM12lEHdzPjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-14"
      },
      {
        "title": "262 MELISSA Bus Clinical Skills Carousel and Care\n                                                Certificate Support: Drop-in",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=diGdmuTywMCUuZ-jihMS7w..&params=o3rQdvUJ5o4toTFC4j5UDZNWIoxwuGT-eUUdupiNDrXjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-15"
      },
      {
        "title": "262 Moving and Handling Level 2 - Patient Handling",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=4gamJ1no_glK-rllea_79w..&params=dYr947Sm93304baoGKV6th3AIYaasy8eauRRGJVBwEfjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-16"
      },
      {
        "title": "262 Nasogastric Tubes",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=bEvSgwGkauPEa_QcB9b5ew..&params=s5Y2qSR9CFzNabXMzsGCnvdN6LxkZXBCLhXijUZDG9vjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-17"
      },
      {
        "title": "262 Nasogastric Tubes (Delivered via Teams)",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=upsauiyX_BkvAuLuDIYihw..&params=JFpibcjZJmQ9cXn6o1feLcnDMy7I.AXBXCt7zTSV7iLjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-18"
      },
      {
        "title": "262 Physiological Observations and NEWS2",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=diGdmuTywMCUuZ-jihMS7w..&params=hT.6qw5Hr2R5aZkVEulImwz5FI7LC.8AIOLjErngcJbjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-19"
      },
      {
        "title": "262 Physiological Observations and NEWS2 (Delivered via\n                                                Teams)",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=upsauiyX_BkvAuLuDIYihw..&params=CuPudzZQgDI4r.1QorGgnuZ6vsd-hmkyzI7BrGYgP.vjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-20"
      },
      {
        "title": "262 Respiratory Examination Simulation-Based Education",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=diGdmuTywMCUuZ-jihMS7w..&params=Kxi2anp9GEA7sS5Ul.GgfTe2BMhufWhMML6JQYGjGTPjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-21"
      },
      {
        "title": "262 SAGE & THYME Foundation Level Workshop",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=diGdmuTywMCUuZ-jihMS7w..&params=YgjnK22jAHKH6PzIbmGCPwpjZ836PsAHdo5yqCZeDlPjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-22"
      },
      {
        "title": "262 Venepuncture Full Training",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=Mf_jQEjjt_jqVoQXodwB6Q..&params=LAj6l4wS8IusWznj2NeVBsSlSzTTK-TidwYD6yscxh-jqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c\n                                            ",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-23"
      },
      {
        "title": "262 Venepuncture - Refresher",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=TJnuQYMNrUwDGO4e0p6UzQ..&params=6jsxiq8s.wkQZ42b247X.gBLFLGX-Vz7z5SiMcVyg9rjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-24"
      },
      {
        "title": "262 Venepuncture - Refresher (Delivered via Teams)",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=TJnuQYMNrUwDGO4e0p6UzQ..&params=yVK-WgBzepP8Lc6fitMzXkOSQWaiu8IDndMrenE-tPvjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-25"
      },
      {
        "title": "262 Cannulation Full Training",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=Mf_jQEjjt_jqVoQXodwB6Q..&params=eL4FQPlEnWzmpUW0xKuAy.jKAx5XIoJlQdSXze5eiiXjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c\n                                            ",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-26"
      },
      {
        "title": "262 Cannulation - Refresher",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=TZ7zzTsrNSJ35bGHlQenKA..&params=7wt4AzDP.JyLZWuZGcWXqmhi7VrD6z68I2V4J106BkHjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c\n                                            ",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-27"
      },
      {
        "title": "262 Cannulation - Refresher (Delivered via Teams)",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=Mf_jQEjjt_jqVoQXodwB6Q..&params=fjbXygk.zSpYnUnUCEu4J2zMfc-oCaH2uLhiKlJIeSfjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c\n                                            ",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-28"
      },
      {
        "title": "262 Gastronomy (PEG) Tube Ongoing Care and Feeding",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=kwRhF1v6cEdGwmaUt0Oclw..&params=6KqKA6OmkzgihcLLfykYjpr92ErimPQR0rn8YAdSe-Xjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c\n                                            ",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-29"
      },
      {
        "title": "262 Gastronomy (PEG) Tube Ongoing Care and Feeding\n                                                (Refresher)",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=kwRhF1v6cEdGwmaUt0Oclw..&params=PAyGDcN4FENeMo3yA1a38.-hoRUYv7efB3FhLV65GCrjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c\n                                            ",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-30"
      },
      {
        "title": "262 Verification of Expected Death and Tissue Donation",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=bEvSgwGkauPEa_QcB9b5ew..&params=Q5qcnuabtLOi3xm8PIc0qi6qJngt13ZZyo14YO5Qj7rjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-31"
      },
      {
        "title": "262 Verification of Expected Death and Tissue Donation\n                                                (Delivered via Teams)",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=upsauiyX_BkvAuLuDIYihw..&params=bp3cobTfucYiRpw9Zulxf0qx7nTbycWFKNZrMLgV9M7jqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-32"
      },
      {
        "title": "262 Let's Talk Bereavement",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=XxCnGtQvmgHopbhvaNneUA..&params=mBtI.tDcpQ6f42K5F8tZaQUN--LCDyY03TmBGgjnpk-jqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-33"
      },
      {
        "title": "262 Let's Talk Bereavement - Anticipatory Grief in\n                                                Adults",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=XxCnGtQvmgHopbhvaNneUA..&params=GeOy8R.euKh2d4VIBqnzhpZaH4o7a-lghAGrdvzGGL3jqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-34"
      },
      {
        "title": "262 Mouth Care Matters - All Staff",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=Ry70iVCjF1MX0milezf3Yg..&params=ZQwDF-oVmF4fy0LlCbvt3vSDym78oBjhCXG4jWsxjJ7jqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-35"
      },
      {
        "title": "262 Mouth Care Matters for Medical Staff",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=Ry70iVCjF1MX0milezf3Yg..&params=NRX-CkVA1-Hfr.q0mpJSR.ieaHtwmfX5JIQF.sWSrWTjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-36"
      },
      {
        "title": "262 MUST (Malnutrition Universal Screening Tool)",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=m0bu-ZDgE2Gu79PVS4EmDA..&params=cRWxrOxyI8HL6Pr3Tm8dwSC8kUls3mysIqrg2vs62prjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-37"
      },
      {
        "title": "262 MUST (Malnutrition Universal Screening Tool)\n                                                (Delivered via Teams)",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=m0bu-ZDgE2Gu79PVS4EmDA..&params=KGFjRzPQe7gbXsauaOyfVFn0MrDTQpnkpAtDhR0l7Rvjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-38"
      },
      {
        "title": "262\n                                                Medical Gas Training for DMO/DNO's",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=vC20vNfJu3473DqTyC7y4Q..&params=Kb-Eiuhp7fwTcIlAnV2koskPWIGHDfVqB9dGFa4KdtXjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-39"
      },
      {
        "title": "262 In House PMVA 1 Day Training",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=hIlrTK9WSE2BlExGlhWrDQ..&params=2Ti8AiM.Q-QP5ZUql3jjUgXft-4lckhjeepa7HO1xkTjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-40"
      },
      {
        "title": "262 PMVA 1 Day Lone Worker",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=XSW7U_q66V4zTYIsezWg6w..&params=v9FA5kDNzzkJ7pOjkAoFAoKVD7cFKJfGSRl1OGmvMOzjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c\n                                            ",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-41"
      },
      {
        "title": "262 PMVA 3 Day Course",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=dIL8QqEfsUaExyq6Kjg7tg..&params=.3N5bdLKNxGRo75TPzEoEhb-iqQG1hO1zYLRWbfl8Drjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c\n                                            ",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-1-42"
      }
    ],
    "id": "cat-1",
    "icon": "book-open"
  },
  {
    "name": "Equality, Diversity\n                                                and Inclusion",
    "color": "#D5759E",
    "courses": [
      {
        "title": "262 Understanding Gender, Sex and Relationship Diversity\n                                                Level 2",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=1VyCHtwUaxwk0Ygt_4newA..&params=iEm5MChKzorceQfRPfgv4LNMkBMqWAVSqr6gDBXkqmnjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-2-1"
      },
      {
        "title": "262 Working with Gender, Sex and Relationship Diversity\n                                                Level 3",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=1VyCHtwUaxwk0Ygt_4newA..&params=aykTKK.3BjNbg1myfVbGSTnjRHIweFcZxqg0NzasQmfjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-2-2"
      },
      {
        "title": "262 Workplace Adjustments Training",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=1VyCHtwUaxwk0Ygt_4newA..&params=5KhYDstH2jBgt99f8B7YncQoNDXU3QpcPSznQP-..-Tjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-2-3"
      },
      {
        "title": "262 How to be an Effective Ally",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=EZEziv0BUW3PbIwiGlWnZw..&params=p0ZWVwxCfAbjN-Q18oejUKbnxgNiu0DnzKTQ.ViA8sbjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-2-4"
      },
      {
        "title": "262 Deaf Awareness Training",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=EZEziv0BUW3PbIwiGlWnZw..&params=TViYpo0rrQG75sqXM0UOTprgYrepWpBHxAgtfi7YDUHjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-2-5"
      },
      {
        "title": "262 Cultural Awareness Training for Managers (Show Racism\n                                                the Red Card)",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=dna1nPoGmU-SjmFaIsmScnYLLXrno0gINImuOn6IQT-jqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-2-6"
      },
      {
        "title": "262 Cultural Awareness Training for Colleagues (Show\n                                                Racism the Red Card)",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=CQVRnPLDgHcgqoQFnIlsa038c3NjgzQIs1YEQLuh1LLjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-2-7"
      },
      {
        "title": "262 Neurodiversity Awareness",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=lHSku8xkavb8aoTomx0d19YzThKMh1fSY.e6T4VgxA-jqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-2-8"
      }
    ],
    "id": "cat-2",
    "icon": "book-open"
  },
  {
    "name": "Health and\n                                                Safety",
    "color": "#92D050",
    "courses": [
      {
        "title": "262 COSHH Training",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=q2MJD0lrDbHnsVV0hQNmQQ..&params=D2POcKxxGqjgIG0MnGffTkR5z9VWq9tbdnOnXwz6N3Pjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-3-1"
      },
      {
        "title": "262 IOSH Managing Safely",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=q2MJD0lrDbHnsVV0hQNmQQ..&params=qqhqxlHyQ2nTGdZ7hfQYU.HYSY06M-.ipVxRMikuKw-jqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-3-2"
      }
    ],
    "id": "cat-3",
    "icon": "book-open"
  },
  {
    "name": "People Management\n                                                Courses",
    "color": "#FFC000",
    "courses": [
      {
        "title": "262 People Management Programme - Developing My Team",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=-H-ydgj5fp5e5uUAXNh_xQ..&params=RMKJPvZ.Ql3eUD00gyZ5jzn8Up1AEwr9kmFBisTwPP3jqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-4-1"
      },
      {
        "title": "262 People Management Programme - Enabling My Team To\n                                                Thrive",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=-H-ydgj5fp5e5uUAXNh_xQ..&params=uJiplABQtxdnzjPW1q8g3G4bfDLxBQHG1ntQeNln2OTjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-4-2"
      },
      {
        "title": "262 People Management Programme - Ensuring a positive\n                                                journey for my team",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=-H-ydgj5fp5e5uUAXNh_xQ..&params=xWq7hFbNn1C9rq.vMSvpAAFGF-Ml5xjC1lVSD4dTqrPjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-4-3"
      },
      {
        "title": "262 People Management Programme - Organisational Culture\n                                                and Context",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=-H-ydgj5fp5e5uUAXNh_xQ..&params=yf1S7NSI5cK.MdukFEyk740jZQBQAeu5w9D9TrbJsw3jqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-4-4"
      },
      {
        "title": "262 Managing Difficult and Challenging Conversations",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=7PJcI8w2ZIlKGEgo2fZDpKsYnXmUMXXnEhastzZUUq-jqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-4-5"
      },
      {
        "title": "262 Dealing with Conduct and Capability Matters",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=5.gru2HxMrJ-CKplM1JqJv78jb9o4A9Xf6da86zMSeXjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-4-6"
      },
      {
        "title": "262 NCIC Coaching Skills",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=gUDZ48NQstEurBn77KgtKA..&params=KU4IPaTZe4mQWgM5L.xaVtUtn-md5eqdMNe9sn-UEVPjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-4-7"
      },
      {
        "title": "262 Facilitations Skills",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=tGz4uQVINR8tGSmKTt4cfA..&params=eqGgQX32KSu2yiseMN748OkbeuzAJEIepdgl-f0Nbnnjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-4-8"
      },
      {
        "title": "262 Resolving Workplace Conflict",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=b21WECoFnqyaQEDiB3PleHpEOkejth5TGnyj0dpb1Hvjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-4-9"
      },
      {
        "title": "262 Attendance Management",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=4gamJ1no_glK-rllea_79w..&params=aZ6398Agm1pZmv2MvD1Mp9491RlMGvRyTFdyk5YtedXjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-4-10"
      },
      {
        "title": "262 Flexible Working Training",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=4gamJ1no_glK-rllea_79w..&params=G7O7DN0LUk2pgzlwJd4QvIdKOO6F8B3JL0KU9WzIiPDjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-4-11"
      },
      {
        "title": "262 Having Meaningful Conversations (Linked to Appraisal\n                                                Policy)",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=4gamJ1no_glK-rllea_79w..&params=EucWRmHN5McrNVmRFa5oyiN6fEF-lcoz1YA6qVHlPm3jqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-4-12"
      },
      {
        "title": "262 Having Meaningful Conversations (Linked to Appraisal\n                                                Policy) Face to Face",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=sTkPMjDDdh69_F6cPuZ0Eg..&params=LWmrBB88dMySEq6cOsF6HDEQMnOl-gPQarUJOruGi1Xjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c\n                                            ",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-4-13"
      }
    ],
    "id": "cat-4",
    "icon": "book-open"
  },
  {
    "name": "Learning and\n                                                Development",
    "color": "#00B0F0",
    "courses": [
      {
        "title": "262 Having Meaningful Conversations (Linked to Appraisal\n                                                Policy)",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=4gamJ1no_glK-rllea_79w..&params=EucWRmHN5McrNVmRFa5oyiN6fEF-lcoz1YA6qVHlPm3jqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-5-1"
      },
      {
        "title": "262 Having Meaningful Conversations (Linked to Appraisal\n                                                Policy) Face to Face",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=sTkPMjDDdh69_F6cPuZ0Eg..&params=LWmrBB88dMySEq6cOsF6HDEQMnOl-gPQarUJOruGi1Xjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c\n                                            ",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-5-2"
      },
      {
        "title": "262 Learning Champions",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=1VyCHtwUaxwk0Ygt_4newA..&params=1lzoCpS2gZqHzrV2W1TJqcU4bmN9DOmSyYyR3y90tr3jqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-5-3"
      },
      {
        "title": "262 Learning Champions Face to Face",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=VSp8cgmYcALh62XeuB0U_g..&params=j8OLkYLDQYl8bcMCM7Vu2.G4PBhIfmAMQYNmd9QDFsfjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c\n                                            ",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-5-4"
      },
      {
        "title": "262 Facilitations Skills",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=tGz4uQVINR8tGSmKTt4cfA..&params=eqGgQX32KSu2yiseMN748OkbeuzAJEIepdgl-f0Nbnnjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-5-5"
      },
      {
        "title": "262 Research and Digital Learning Skills to support\n                                                Leadership Practice",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=1VyCHtwUaxwk0Ygt_4newA..&params=.mqiqb.FG27LEaf05hkl0cNVEoNx83iUsuHLiFGViFjjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-5-6"
      },
      {
        "title": "262 Functional Skills Inductions",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=1LCqqYdmhht7-t1zHRVQ-w..&params=NmFjgE0y-VhSDaepXsv9pkPke8cpbweCJlp-ai.oOtLjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c\n                                            ",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-5-7"
      },
      {
        "title": "262 Functional Skills Support Sessions",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=1LCqqYdmhht7-t1zHRVQ-w..&params=vJPcmmNKepKoC2qLPul-fMsUiz7oTK-2qnZAekZxmBLjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c\n                                            ",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-5-8"
      },
      {
        "title": "262 Apprenticeship Development Event",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=3oPW6tVM1Wa34cZ_Eq-_Dg..&params=7rw.9JKfnnzb6j6KzyIBiRyEWVbsgfPpflxT0i9ymavjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-5-9"
      },
      {
        "title": "262 NCIC Coaching Skills",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=gUDZ48NQstEurBn77KgtKA..&params=KU4IPaTZe4mQWgM5L.xaVtUtn-md5eqdMNe9sn-UEVPjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c\n                                            ",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-5-10"
      },
      {
        "title": "262 Working Together Effectively",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=p-NxT0XwsYmSUsXEye1vK33HiZDyGbmDdA-UnSJK1tTjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-5-11"
      },
      {
        "title": "262 Confident Applications & Interview Skills",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=vHq.uyQHlr6gnKeNmSPuuh8wKgGsaKMsUH.N3SJKcADjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-5-12"
      },
      {
        "title": "262 Efficient Time Management",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=RfKaTd9nLDQPskQuMDR.ROSwhIG6SbWX6k7mR-qN7CXjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-5-13"
      },
      {
        "title": "262 Impactful Presentation Skills",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=MABE7Iy5Gobnc2GBDrs0KUcKnTG-vovE.zUKOO1NrDvjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-5-14"
      }
    ],
    "id": "cat-5",
    "icon": "book-open"
  },
  {
    "name": "Leadership\n                                                3,2,1",
    "color": "#2F5597",
    "courses": [
      {
        "title": "262 Leadership 1",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=UiUVRV0.183STZHZGVE04K78ygU.W9vEFSWbXchtYhTjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-6-1"
      },
      {
        "title": "262 Leadership 2",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=bGtmZ78UVAVX8pdov5aEKga-hHDFNcP5R9dYh74f8Jvjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-6-2"
      },
      {
        "title": "262 Leadership 3",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=oNH4awh4rvs0UHYc7oJUCVd8-43DyGMmv4hWWr6FoQnjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-6-3"
      }
    ],
    "id": "cat-6",
    "icon": "book-open"
  },
  {
    "name": "Moving and\n                                                Handling",
    "color": "#ED7D31",
    "courses": [
      {
        "title": "262 Moving and Handling Level 2 - Patient Handling",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=4gamJ1no_glK-rllea_79w..&params=dYr947Sm93304baoGKV6th3AIYaasy8eauRRGJVBwEfjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-7-1"
      },
      {
        "title": "262 Moving and Handling Plus-Size Awareness Training",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=rSRKcX4SOE9EIdPWFEa8Yu18XABsQuebqwxn3-i3gRzjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-7-2"
      }
    ],
    "id": "cat-7",
    "icon": "book-open"
  },
  {
    "name": "Preceptorship",
    "color": "#A5A5A5",
    "courses": [
      {
        "title": "262 Preceptor Training",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=KaO3rBhusr8gJbe-TNpyZw..&params=-mI9BD6aNXPrg3xm1fQExkARbTePq5biUnYIXqTufMHjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-8-1"
      }
    ],
    "id": "cat-8",
    "icon": "compass"
  },
  {
    "name": "Safeguarding",
    "color": "#00B050",
    "courses": [
      {
        "title": "262 MCA DoLS & Best Interest (via MS Teams)",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=B.GVd8n1BQsl.JNtNUICGS2GPhsXWa.ZHf5TLftQL8fjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-9-1"
      },
      {
        "title": "262 MCA DoLS & Best Interest",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=qeBsrgd.bTnc7qhC.Hf24Ax3d82fmXG.J6W5LN7VXHrjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-9-2"
      },
      {
        "title": "262 Mental Capacity Assessment 16 and 17 Year Old\n                                                Training",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=x8QMiPdQmihQbUiWUg3EFQ..&params=Bl5iceIjumiM-TOCHcE.ahTGqtq4P5u-eGYWGsIRqcXjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c ",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-9-3"
      },
      {
        "title": "262 Safeguarding Adults Level 3",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=4gamJ1no_glK-rllea_79w..&params=n5UWoki3gRFgbsLWObm80FTfNeNbdRgPiX5IvEzm-eLjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-9-4"
      },
      {
        "title": "262 Safeguarding Children Level 3",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=4gamJ1no_glK-rllea_79w..&params=YkKXg2PQx1mD1aq6w-EPdmZ4BoKQXCDKnoZeS6W1IKTjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-9-5"
      },
      {
        "title": "262 Safeguarding Children Supervision - Child Exploitation",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=X_RLI6wvcotFn940RlwOhg..&params=78Bb7sF.fWaMKvisi1mgqKbYznYybArMLYc2.WGAEwPjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-9-6"
      },
      {
        "title": "262 Safeguarding Children Supervision - Child Neglect",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=X_RLI6wvcotFn940RlwOhg..&params=s3KvC.tz2Kmlke8hiZ0-KGKDCinCt5mwaS1OgS335QDjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-9-7"
      },
      {
        "title": "262 Safeguarding Children Supervision - CSPRs",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=XxCnGtQvmgHopbhvaNneUA..&params=O0ucumWOtLMOImXvlcEZ13xkBSa9mWZyRi9dglMLU7Hjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-9-8"
      },
      {
        "title": "262 Safeguarding Children Supervision - Information Sharing\n                                                and Confidentiality",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=XxCnGtQvmgHopbhvaNneUA..&params=KriuAApNP0YdevkEMKAAS0iekM5E7jumZv3-osFcN7Hjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA\n                                            ",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-9-9"
      },
      {
        "title": "262 Safeguarding Children Supervision - Parental Mental\n                                                Health",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=XxCnGtQvmgHopbhvaNneUA..&params=9ekV-HssoFBQJC-S6txhC1-ps53ilDcZHw3td8GSK3zjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-9-10"
      },
      {
        "title": "262 Safeguarding Children Supervision - Voice of the\n                                                Child",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=XxCnGtQvmgHopbhvaNneUA..&params=HU1GA3jmt84VKhnE.A1nzT0bP66BGklUpqTj5WmwAEzjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA\n                                            ",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-9-11"
      },
      {
        "title": "262 Safeguarding Children Supervision - Child and\n                                                Adolescent Mental Health",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=0SI4RybxWe6hNVxw75OrXA..&params=01U.3Mo9cmuy-ocSLXFpHPMY.TN5HnmFXj2k-Ew9BSjjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-9-12"
      },
      {
        "title": "262 Safeguarding Children Supervision - Making a\n                                                Referral/Requesting Information",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=0SI4RybxWe6hNVxw75OrXA..&params=lZnLQ.qfGr2ZhoHOOxLaXQPH-u3li55s0yONbSOAtNnjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-9-13"
      },
      {
        "title": "262 Safeguarding Children Supervision - Parental Substance\n                                                Misuse",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=0SI4RybxWe6hNVxw75OrXA..&params=uTvTjh4kyyTGgeorrC4sL1VS.qRmdGR3DBYqr-6sjVDjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-9-14"
      },
      {
        "title": "262 Safeguarding Children Supervision - Prevent",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=0SI4RybxWe6hNVxw75OrXA..&params=yGY73QhDfW6ZNM53YqLl0p5UYd5GvKOkKreln2xFuu7jqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-9-15"
      },
      {
        "title": "262 Safeguarding Children Supervision - Professional\n                                                Conversations/Exploitation",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=0SI4RybxWe6hNVxw75OrXA..&params=JdYvgXZDvNqN1sYmmPQs7vs4MUTUvVWTij0dT62YPKzjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-9-16"
      },
      {
        "title": "262 Safeguarding Children Supervision - Sexual Abuse",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=0SI4RybxWe6hNVxw75OrXA..&params=RbMaiTIQ7z3M7ZbRulJ6kfU15LKUBEPejQfi.E6HHQbjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-9-17"
      },
      {
        "title": "262 Safeguarding Children Supervision - FGM",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=Me2DJNZtnodGlCIS1c37E-nMjEfIhyaqG4w9D-8-5j7jqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-9-18"
      },
      {
        "title": "262 Safeguarding Children Supervision - Understanding\n                                                Thresholds",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=KDUfJQRYeZkb.9cFgiW2TnCNEjCbba4VvNxob.Vt6nnjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-9-19"
      },
      {
        "title": "262 Safeguarding Children Supervision - Domestic Abuse and\n                                                Impact on Children",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=Gh1e.3LWV1LWU-mLxKlBzZs229wwkq6EeHU8q13oeYDjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-9-20"
      }
    ],
    "id": "cat-9",
    "icon": "user-check"
  },
  {
    "name": "Wound\n                                                Management",
    "color": "#CC0000",
    "courses": [
      {
        "title": "262 Wound Assessment Foundation Course",
        "url": "\n                                            https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=ONLUVrPTQ-sOGsquQa_OTA..&params=tBncGbKq5qelyzVJNpc7TgdIIM7kidbpKT3K7bP.qczjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA\n                                            ",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "btn-primary",
          "btn-block",
          "h-100"
        ],
        "id": "course-10-1"
      },
      {
        "title": "262 Wound Management (Acute and Community Inpatients)",
        "url": "\n                                            https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=UXUs6ujQ2rXHOvrepJr7BA..&params=Bh2Uq0dooX8T9BjxMVE7D7khugmsy8EcLCRTrTJ5xrrjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA\n                                            ",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "btn-primary",
          "btn-block",
          "h-100"
        ],
        "id": "course-10-2"
      },
      {
        "title": "262 Wound Management (Community Nurses)",
        "url": "\n                                            https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=XxCnGtQvmgHopbhvaNneUA..&params=mHy4cWRMARI07BwTXTKkfxcpV1izOomVMpgavdHKg0zjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA\n                                            ",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "btn-primary",
          "btn-block",
          "h-100"
        ],
        "id": "course-10-3"
      },
      {
        "title": "262 Prevention and Management of Pressure Ulcers",
        "url": "\n                                            https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=XxCnGtQvmgHopbhvaNneUA..&params=8VLgYxgtWl1XAgzcjBiCnqi3ug9qEfYj4hO-MjgBsKzjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA\n                                            ",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "btn-primary",
          "btn-block",
          "h-100"
        ],
        "id": "course-10-4"
      },
      {
        "title": "262 Tissue Viability for Midwives",
        "url": "\n                                            https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=KaO3rBhusr8gJbe-TNpyZw..&params=9CsrZCfl97s9HLTMd6srzGUSiABvi0nhJKuh8nzvXJ-jqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA\n                                            ",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "btn-primary",
          "btn-block",
          "h-100"
        ],
        "id": "course-10-5"
      }
    ],
    "id": "cat-10",
    "icon": "book-open"
  },
  {
    "name": "Governance",
    "color": "#D5759E",
    "courses": [
      {
        "title": "262 Ulysses Risk Training",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=uNJo6YJlFgTCI8Ww_ARfNw..&params=QM1g561yCTNl3X6XEPrD7kQV.pUoOBcYqKqSr8Mceubjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-11-1"
      },
      {
        "title": "262 Risk Masterclass",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=Dsbxm_hZ5Iev0A1HliRoQg..&params=ogXq4MMTbTZ1As8olvQqXZtM-pPo.hjtAfv.Ye2OKazjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-11-2"
      },
      {
        "title": "262 How to Report an Incident on Ulysses",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=h8lc8wkiYtEd1QVXcR0qsdAeA5aRW-WHLcnlLGomePXjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-11-3"
      },
      {
        "title": "262 How to Manage Incidents on Ulysses",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=EJKCv6Vgx71gFOd5dZdTJGesfmX2usNuchQeFfpUrCbjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-11-4"
      },
      {
        "title": "262 Patient Safety Incident Response Framework (PSIRF)\n                                                Awareness Session",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=ffzyFgyZPqqgt1EUYKArlriD-SwrRKPJX.7TfGwmbObjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-11-5"
      }
    ],
    "id": "cat-11",
    "icon": "briefcase"
  },
  {
    "name": "Health and\n                                                Wellbeing",
    "color": "#ED7D31",
    "courses": [
      {
        "title": "262 Mental Health Alertness in the Workplace",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=2etGK7eMBhW4zqA4mJM4yw-GoANU.7keU-akS3RC4GPjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-12-1"
      },
      {
        "title": "262 Mental Health Alertness in the Workplace (online\n                                                course)",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=7UkW2NbBSwnXE-czhMqzWRuwKOTjFhVddJomD1a1.hjjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-12-2"
      },
      {
        "title": "262 Mental Health First Aid Training (2 day course)",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=ySjRCTuVdCACOkvzhBpyFSkz.eK.wAQiv6p2auIvsl7jqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-12-3"
      },
      {
        "title": "262 Mental Health First Aid Training (2 day online\n                                                course)",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&params=CBlomY-LgFykJ6dCqj3MIEBaVN57QdIhDR.HfLvim6rjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-12-4"
      },
      {
        "title": "262 Mindfulness and Compassionate Mind Training\n                                                Introductory Session",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=XxCnGtQvmgHopbhvaNneUA..&params=yuWyDiwE5qjFdGpj.kjKwr94oDTSogIqkiGTxncRWbHjqmc8GjONz5gXLyN7DUgptax8Rco9sNU9t8L0CNyxAA\n                                            ",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-12-5"
      },
      {
        "title": "262 The Power of the Breath",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=1qkyEeyPKu2d_RGIAmLPbw..&params=37wGNUETnCCgG8QxKSlhXX5-KtlJuoaiSpIAinNPYRrjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c\n                                            ",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-12-6"
      },
      {
        "title": "262 How to Recover Faster After a Stressful Event",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=1qkyEeyPKu2d_RGIAmLPbw..&params=fbaIgRq-sLFpjD.wUirEn7yjwf0Jp8lidi90LDUoi67jqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c\n                                            ",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-12-7"
      },
      {
        "title": "262 Sleep is Your Superpower",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=1qkyEeyPKu2d_RGIAmLPbw..&params=JDOtYJR3ebTGHxbVu3v9v372TzBqvwUGOUtskRe2JJ7jqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c\n                                            ",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-12-8"
      },
      {
        "title": "262 Gut Health and The Brain Body Link",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=3oPW6tVM1Wa34cZ_Eq-_Dg..&params=8Csyd1-etrYESNsdupSCvMA6H.4p2q.1z5e998MGwo3jqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-12-9"
      },
      {
        "title": "262 Hardwiring Happiness",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=3oPW6tVM1Wa34cZ_Eq-_Dg..&params=01kQOFBeR58VuoMezpi9vf7quu.indqmKuf3vXiBcjrjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-12-10"
      },
      {
        "title": "262 Self-Compassion Course",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=S4L5BR7FNcCuKLkczST5BA..&params=Ni4gAtyOoz8xFHC6jHRIRdiAGzNHAAwCzCI9g9el1Jzjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-12-11"
      },
      {
        "title": "262 Mental Health and Your Wellbeing",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=uNJo6YJlFgTCI8Ww_ARfNw..&params=VYMUxW8-.devLy1ninv4X.Grsbrf1-mEII6neaFZcLXjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-12-12"
      },
      {
        "title": "262 Mindfulness for Mental Health and Wellbeing",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=uNJo6YJlFgTCI8Ww_ARfNw..&params=OhvCGQXswODo8d0f8TMlJ0snsKPpZs-iTYv8Nl38HWrjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-12-13"
      },
      {
        "title": "262 Workplace Stress and Mental Health",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=uNJo6YJlFgTCI8Ww_ARfNw..&params=kEHYkOn2n4BPwwlpnj75kxJaafvxqPddhR36e94gaMTjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Virtual Classroom",
        "classes": [
          "btn",
          "Button_VClassroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-12-14"
      }
    ],
    "id": "cat-12",
    "icon": "book-open"
  },
  {
    "name": "Vaccination and\n                                                Immunisation",
    "color": "#FFC000",
    "courses": [
      {
        "title": "262 Introduction to Vaccinations - Adults (& Children\n                                                Day 1) (347)",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=uNJo6YJlFgTCI8Ww_ARfNw..&params=Ed-xR8-7A-rhM.4ywwaqMlpJWKKuGj5i43sEXgNr.nbjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-13-1"
      },
      {
        "title": "262 Introduction to Vaccinations - Children Day 2\n                                                (348)",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=uNJo6YJlFgTCI8Ww_ARfNw..&params=u-pxU.gByj6ZQqMJWPClCfWSige2X.REOwOJWT0Cl6Ljqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-13-2"
      },
      {
        "title": "262 Annual Update - Adult Vaccinations (Interim) (349)",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=uNJo6YJlFgTCI8Ww_ARfNw..&params=lE6nB9a-6uwHgaMtQ-iM1u10GrH2YkajVBDcPpr7ytXjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-13-3"
      },
      {
        "title": "262 Annual Update Adult Vaccinations - Year 4 (350)",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=uNJo6YJlFgTCI8Ww_ARfNw..&params=e.XXhr38G70PPzQIlWoDgZeSNiseid8qjiNo99prZjbjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-13-4"
      },
      {
        "title": "262 Annual Update - Child Vaccination (351)",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=uNJo6YJlFgTCI8Ww_ARfNw..&params=olyRn6fF2Q.OsdYNwI89hHr0Qukmk3ZYGSy1mktcBP3jqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-13-5"
      },
      {
        "title": "262 Annual Update - Child Vaccination Advisers (352)",
        "url": "https://my.esr.nhs.uk:443/OA_HTML/RF.jsp?function_id=18931&resp_id=-1&resp_appl_id=-1&security_group_id=0&lang_code=US&oas=uNJo6YJlFgTCI8Ww_ARfNw..&params=C8MUsI9h6x5Mjcp3PzRBziIe9OARiNBR4DUuRBC7wnrjqmc8GjONz5gXLyN7DUgpolGCdLYoiv5z9-CiuyyplscZXUiFSbGwKJ2TS0fMk1c",
        "delivery_type": "Classroom",
        "classes": [
          "btn",
          "Button_Classroom",
          "btn-block",
          "h-100"
        ],
        "id": "course-13-6"
      }
    ],
    "id": "cat-13",
    "icon": "book-open"
  }
];

// Export for module systems (Node/ESM) or attach to global window for browser
if (typeof module !== "undefined" && module.exports) {
  module.exports = { APP_CONFIG, GUIDES_DATA, FAQS_DATA, CATEGORIES_DATA };
}
