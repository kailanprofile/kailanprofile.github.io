// 이미지 경로 인코딩 함수
function encodePath(path) {
    // GitHub Pages에서 한글 경로 처리
    return path.split('/').map(part => encodeURIComponent(part)).join('/');
}

// SFW 갤러리 이미지 목록
const sfwImagesRaw = [
    { src: '카일란 sfw 에셋/Kailan_Adjusting_Collar_Composed.jpg', title: '깃을 다듬는 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Adjusting_Medal_Arrogant.jpg', title: '훈장을 정리하는 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Arranging_Torture_Tools.jpg', title: '도구를 정리하는 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Bloody_Uniform_Satisfied.jpg', title: '피로 물든 제복의 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Chin_On_Glove_Intrigued.jpg', title: '장갑에 턱을 괸 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Cleaning_Tools_Focused.jpg', title: '도구를 닦는 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Dominant_Pose_Between_Legs.jpg', title: '지배적인 자세의 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Examining_Chain_Collar_Shirt_Open.jpg', title: '쇠사슬 목걸이를 살피는 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Eyes_Closed_Recalling.jpg', title: '눈을 감고 회상하는 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Gloved_Finger_Gesture_Commanding.jpg', title: '명령하는 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Grabbing_Chin_Collar.jpg', title: '턱을 잡은 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Holding_Belt_Cold_Gaze.jpg', title: '벨트를 든 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Holding_Belt_Intimidating.jpg', title: '위협적인 자세의 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Holding_Hat_Looking_Out_Window.jpg', title: '창밖을 보는 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Holding_Leash_Dominant.jpg', title: '목줄을 든 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Holding_Subjects_Hand_Observing.jpg', title: '피험체의 손을 잡은 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Holding_Tool_Faint_Smile.jpg', title: '도구를 든 채 미소짓는 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Interrogation_Subject_Bound.jpg', title: '심문 중인 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Leaning_Back_In_Chair_Confident.jpg', title: '의자에 기댄 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Leaning_Down_Observing.jpg', title: '몸을 숙여 관찰하는 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Leaning_On_Bloody_Wall_Smile.jpg', title: '피묻은 벽에 기댄 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Leaning_On_Subject_Weary.jpg', title: '지친 표정의 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Leaning_Over_Subject.jpg', title: '피험체 위로 몸을 숙인 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Leaning_Weary_Expression.jpg', title: '피곤한 표정의 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Licking_Blood_From_Glove.jpg', title: '장갑의 피를 핥는 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Lying_On_Subject_Observing.jpg', title: '피험체 위에 누운 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Night_Cityscape_Planning.jpg', title: '야경을 보며 계획하는 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Observing_Subject_Closeup.jpg', title: '피험체를 가까이서 관찰하는 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Offering_Hand_Commanding.jpg', title: '손을 내미는 카일란' },
    { src: '카일란 sfw 에셋/Kailan_On_Throne_Bored_Expression.jpg', title: '왕좌에 앉은 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Ornate_Uniform_Authoritative.jpg', title: '화려한 제복의 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Pointing_At_Map_Subjects_Hand.jpg', title: '지도를 가리키는 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Preparing_Tools_Profile.jpg', title: '도구를 준비하는 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Presenting_Collar_Observing.jpg', title: '목걸이를 보여주는 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Putting_On_Gloves_Looking_Down.jpg', title: '장갑을 끼는 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Removing_Gloves_Thinking.jpg', title: '장갑을 벗으며 생각하는 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Reviewing_Documents_Smirk.jpg', title: '서류를 검토하는 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Sitting_In_Chair_Observing_Order.jpg', title: '의자에 앉아 명령하는 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Sitting_Legs_Crossed_With_Handcuffs.jpg', title: '수갑을 든 채 다리를 꼰 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Sitting_With_Subject_Possessive.jpg', title: '피험체와 함께 앉은 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Smirk_In_Control.jpg', title: '통제하며 미소짓는 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Smoking_On_Chair_Arrogant.jpg', title: '의자에서 담배 피우는 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Smoking_Waiting.jpg', title: '담배를 피우며 기다리는 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Smoking_While_Watching.jpg', title: '담배를 피우며 지켜보는 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Subject_At_Feet_Satisfied.jpg', title: '만족스러운 표정의 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Sweaty_Hair_After_Shower_Topless.jpg', title: '샤워 후의 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Tearing_Your_Clothes.jpg', title: '옷을 찢는 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Touching_Chin_Analyzing.jpg', title: '턱을 만지며 분석하는 카일란' },
    { src: '카일란 sfw 에셋/Kailan_Unbuttoning_Shirt_Preparing.jpg', title: '셔츠를 푸는 카일란' }
];

// 이미지 경로 인코딩
const sfwImages = sfwImagesRaw.map(img => ({
    ...img,
    src: encodePath(img.src)
}));

// NSFW 갤러리 이미지 목록
const nsfwImagesRaw = [
    { src: '카일란 nsfw 에셋/Kailan_BL_NSFW_Blowjob_Forced_Intimate.jpg', title: 'NSFW 콘텐츠' },
    { src: '카일란 nsfw 에셋/Kailan_Grabbing_Hair.jpg', title: 'NSFW 콘텐츠' },
    { src: '카일란 nsfw 에셋/Kailan_Lifting_Subject_Observing.jpg', title: 'NSFW 콘텐츠' },
    { src: '카일란 nsfw 에셋/Kailan_NSFW_Blowjob_Climax_Dominant.jpg', title: 'NSFW 콘텐츠' },
    { src: '카일란 nsfw 에셋/Kailan_NSFW_Blowjob_Climax.jpg', title: 'NSFW 콘텐츠' },
    { src: '카일란 nsfw 에셋/Kailan_NSFW_Blowjob_Leaning_Back.jpg', title: 'NSFW 콘텐츠' },
    { src: '카일란 nsfw 에셋/Kailan_NSFW_Blowjob_Leaning_Over_Subject.jpg', title: 'NSFW 콘텐츠' },
    { src: '카일란 nsfw 에셋/Kailan_NSFW_Blowjob_Starting.jpg', title: 'NSFW 콘텐츠' },
    { src: '카일란 nsfw 에셋/Kailan_NSFW_Blowjob_Uniform_On_Pleasure.jpg', title: 'NSFW 콘텐츠' },
    { src: '카일란 nsfw 에셋/Kailan_NSFW_Holding_Belt_Shirt_Open.jpg', title: 'NSFW 콘텐츠' },
    { src: '카일란 nsfw 에셋/Kailan_NSFW_Jacket_Off_Shoulders_Looking_Down.jpg', title: 'NSFW 콘텐츠' },
    { src: '카일란 nsfw 에셋/Kailan_NSFW_Masturbation_Ejaculation_Gloved_Hand.jpg', title: 'NSFW 콘텐츠' },
    { src: '카일란 nsfw 에셋/Kailan_NSFW_Masturbation_Gloved_Hand_Looking_Down.jpg', title: 'NSFW 콘텐츠' },
    { src: '카일란 nsfw 에셋/Kailan_NSFW_Masturbation_Smirk_Looking_Down.jpg', title: 'NSFW 콘텐츠' },
    { src: '카일란 nsfw 에셋/Kailan_NSFW_Sex_From_Behind_Back_Muscles.jpg', title: 'NSFW 콘텐츠' },
    { src: '카일란 nsfw 에셋/Kailan_NSFW_Sex_Holding_Legs_Watching_Face.jpg', title: 'NSFW 콘텐츠' },
    { src: '카일란 nsfw 에셋/Kailan_NSFW_Sex_Legs_On_Shoulders.jpg', title: 'NSFW 콘텐츠' },
    { src: '카일란 nsfw 에셋/Kailan_NSFW_Sex_Looking_Down_Sweaty.jpg', title: 'NSFW 콘텐츠' },
    { src: '카일란 nsfw 에셋/Kailan_NSFW_Sex_Spreading_Legs_Observing.jpg', title: 'NSFW 콘텐츠' },
    { src: '카일란 nsfw 에셋/Kailan_NSFW_Sex_Spreading_Legs_Satisfied.jpg', title: 'NSFW 콘텐츠' },
    { src: '카일란 nsfw 에셋/Kailan_NSFW_Sex_Sweaty_Cold_Expression.jpg', title: 'NSFW 콘텐츠' },
    { src: '카일란 nsfw 에셋/Kailan_NSFW_Sex_Thrusting_Cock.jpg', title: 'NSFW 콘텐츠' },
    { src: '카일란 nsfw 에셋/Kailan_NSFW_Sex_Top_Position_Dominant.jpg', title: 'NSFW 콘텐츠' },
    { src: '카일란 nsfw 에셋/Kailan_NSFW_Sex_Topless_Observing.jpg', title: 'NSFW 콘텐츠' },
    { src: '카일란 nsfw 에셋/Kailan_NSFW_Shirt_Open_Abs_Smirk.jpg', title: 'NSFW 콘텐츠' },
    { src: '카일란 nsfw 에셋/Kailan_NSFW_Topless_Observing.jpg', title: 'NSFW 콘텐츠' },
    { src: '카일란 nsfw 에셋/Kailan_NSFW_Uniform_Jacket_Open_Abs.jpg', title: 'NSFW 콘텐츠' }
];

// NSFW 이미지 경로 인코딩
const nsfwImages = nsfwImagesRaw.map(img => ({
    ...img,
    src: encodePath(img.src)
}));

// DOM 요소들
const loadingScreen = document.getElementById('loading-screen');
const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mainHeader = document.querySelector('.main-header');
const navigationLinks = document.querySelectorAll('.navigation a');
const sceneTabs = document.querySelectorAll('.scene-tab');
const sceneContents = document.querySelectorAll('.scene-content');
const galleryTabs = document.querySelectorAll('.gallery-tab');
const sfwGallery = document.getElementById('sfw-gallery');
const nsfwGallery = document.getElementById('nsfw-gallery');
const nsfwWarning = document.getElementById('nsfw-warning');
const confirmNsfw = document.getElementById('confirm-nsfw');
const imageModal = document.getElementById('image-modal');
const modalImage = document.querySelector('.modal-image');
const modalCaption = document.querySelector('.modal-caption');
const modalClose = document.querySelector('.modal-close');

// NSFW 콘텐츠 확인 상태
let nsfwConfirmed = false;

// 페이지 로드 완료 시
window.addEventListener('load', () => {
    // 모바일에서 헤더 초기화
    if (window.innerWidth <= 768) {
        mainHeader.classList.remove('hidden');
        mainHeader.classList.remove('active');
    }
    
    // 갤러리 강제 리프레시 (모바일 문제 해결)
    setTimeout(() => {
        refreshGallery();
        forceMobileGalleryInit();
    }, 100);
    
    // 추가 딜레이로 한 번 더 시도
    setTimeout(() => {
        forceMobileGalleryInit();
    }, 1000);
    
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            initializeAnimations();
        }, 500);
    }, 2000);
});

// 애니메이션 초기화
function initializeAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // 갤러리 섹션이 보일 때 갤러리 새로고침
                if (entry.target.id === 'gallery') {
                    setTimeout(() => {
                        refreshGallery();
                    }, 100);
                }
            }
        });
    }, observerOptions);

    // fade-in 요소들에 옵저버 적용
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
}

// 음악 재생/정지
musicToggle.addEventListener('click', () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicToggle.classList.add('playing');
    } else {
        backgroundMusic.pause();
        musicToggle.classList.remove('playing');
    }
});

// 모바일 메뉴 토글
mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    mainHeader.classList.toggle('active');
    // 메뉴를 열 때 hidden 클래스 제거
    if (mainHeader.classList.contains('active')) {
        mainHeader.classList.remove('hidden');
    }
});

// 네비게이션 링크 클릭
navigationLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offset = window.innerWidth <= 768 ? 60 : 80;
            const targetPosition = targetSection.offsetTop - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // 모바일에서 메뉴 닫기
            if (window.innerWidth <= 768) {
                mobileMenuToggle.classList.remove('active');
                mainHeader.classList.remove('active');
                // hidden 클래스도 제거
                mainHeader.classList.remove('hidden');
            }
        }
        
        // 활성 링크 업데이트
        navigationLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
    });
});

// 스크롤 시 헤더 숨기기/보이기
let lastScrollTop = 0;
let scrollTimer = null;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // 모바일에서는 스크롤 시 헤더를 숨기지 않음
    if (window.innerWidth > 768) {
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            mainHeader.classList.add('hidden');
        } else {
            mainHeader.classList.remove('hidden');
        }
    }
    
    lastScrollTop = scrollTop;
    
    // 현재 섹션에 따른 네비게이션 활성화
    updateActiveNavigation();
});

// 활성 네비게이션 업데이트
function updateActiveNavigation() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navigationLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// 시작 장면 탭 전환
sceneTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetScene = tab.getAttribute('data-scene');
        
        sceneTabs.forEach(t => t.classList.remove('active'));
        sceneContents.forEach(c => c.classList.remove('active'));
        
        tab.classList.add('active');
        document.getElementById(targetScene).classList.add('active');
    });
});

// 갤러리 탭 전환
galleryTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const targetGallery = tab.getAttribute('data-gallery');
        
        console.log('갤러리 탭 전환:', targetGallery);
        
        // 모든 탭에서 active 클래스 제거
        galleryTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        // 모든 갤러리 숨기기
        sfwGallery.style.display = 'none';
        sfwGallery.classList.remove('active');
        sfwGallery.classList.add('hidden');
        
        nsfwGallery.style.display = 'none';
        nsfwGallery.classList.remove('active');
        
        nsfwWarning.style.display = 'none';
        
        if (targetGallery === 'sfw') {
            // SFW 갤러리 표시
            sfwGallery.style.display = 'grid';
            sfwGallery.classList.add('active');
            sfwGallery.classList.remove('hidden');
            
            console.log('SFW 갤러리 활성화');
            
            // SFW 갤러리 재로드
            setTimeout(() => {
                if (sfwGallery.children.length === 0) {
                    loadGalleryImages(sfwImages, sfwGallery);
                }
            }, 50);
        } else {
            // NSFW 갤러리 처리
            if (nsfwConfirmed) {
                nsfwGallery.style.display = 'grid';
                nsfwGallery.classList.add('active');
                
                console.log('NSFW 갤러리 활성화');
                
                // NSFW 갤러리 재로드
                setTimeout(() => {
                    if (nsfwGallery.children.length === 0) {
                        loadGalleryImages(nsfwImages, nsfwGallery);
                    }
                }, 50);
            } else {
                nsfwWarning.style.display = 'block';
                console.log('NSFW 경고 표시');
            }
        }
    });
});

// NSFW 확인
confirmNsfw.addEventListener('click', () => {
    console.log('NSFW 확인됨');
    nsfwConfirmed = true;
    
    // 경고 숨기고 NSFW 갤러리 표시
    nsfwWarning.style.display = 'none';
    nsfwGallery.style.display = 'grid';
    nsfwGallery.classList.add('active');
    
    // SFW 갤러리는 확실히 숨기기
    sfwGallery.style.display = 'none';
    sfwGallery.classList.remove('active');
    sfwGallery.classList.add('hidden');
    
    loadNsfwGallery();
});

// 갤러리 이미지 로드
function loadGalleryImages(images, container) {
    console.log('갤러리 로딩 시작:', container.id, '이미지 수:', images.length);
    container.innerHTML = '';
    
    if (!container) {
        console.error('갤러리 컨테이너를 찾을 수 없습니다');
        return;
    }
    
    images.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.title;
        img.loading = 'lazy';
        
        // 이미지 로드 에러 처리
        img.onerror = function() {
            console.error('이미지 로드 실패:', image.src);
            // 모바일에서도 잘 보이는 플레이스홀더
            this.style.backgroundColor = '#2d2d2d';
            this.style.width = '100%';
            this.style.height = '250px';
            this.style.objectFit = 'cover';
            this.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"%3E%3Crect width="300" height="300" fill="%232d2d2d"/%3E%3Ctext x="150" y="150" text-anchor="middle" dominant-baseline="middle" fill="%23888" font-family="sans-serif" font-size="16"%3E이미지 로드 실패%3C/text%3E%3C/svg%3E';
        };
        
        const title = document.createElement('div');
        title.className = 'gallery-item-title';
        title.textContent = image.title;
        
        item.appendChild(img);
        item.appendChild(title);
        
        item.addEventListener('click', () => openModal(image.src, image.title));
        container.appendChild(item);
        
        // 첫 번째 이미지가 추가되면 로그
        if (index === 0) {
            console.log('첫 번째 이미지 추가됨:', image.src);
        }
    });
    
    console.log('갤러리 로딩 완료:', container.children.length, '개 아이템');
}

// 갤러리 새로고침 함수
function refreshGallery() {
    console.log('갤러리 새로고침 시작');
    
    // 현재 활성 탭 확인
    const activeGalleryTab = document.querySelector('.gallery-tab.active');
    const activeTabType = activeGalleryTab ? activeGalleryTab.getAttribute('data-gallery') : 'sfw';
    
    console.log('현재 활성 갤러리 탭:', activeTabType);
    
    if (activeTabType === 'sfw') {
        // SFW만 표시
        if (sfwGallery) {
            sfwGallery.style.display = 'grid';
            sfwGallery.classList.add('active');
            sfwGallery.classList.remove('hidden');
            if (sfwGallery.children.length === 0) {
                loadGalleryImages(sfwImages, sfwGallery);
            }
        }
        
        // NSFW와 경고는 숨김
        if (nsfwGallery) {
            nsfwGallery.style.display = 'none';
            nsfwGallery.classList.remove('active');
        }
        if (nsfwWarning) {
            nsfwWarning.style.display = 'none';
        }
    } else {
        // NSFW 탭 선택됨
        if (sfwGallery) {
            sfwGallery.style.display = 'none';
            sfwGallery.classList.remove('active');
            sfwGallery.classList.add('hidden');
        }
        
        if (nsfwConfirmed) {
            if (nsfwGallery) {
                nsfwGallery.style.display = 'grid';
                nsfwGallery.classList.add('active');
                if (nsfwGallery.children.length === 0) {
                    loadGalleryImages(nsfwImages, nsfwGallery);
                }
            }
            if (nsfwWarning) {
                nsfwWarning.style.display = 'none';
            }
        } else {
            if (nsfwGallery) {
                nsfwGallery.style.display = 'none';
                nsfwGallery.classList.remove('active');
            }
            if (nsfwWarning) {
                nsfwWarning.style.display = 'block';
            }
        }
    }
}

// SFW 갤러리 로드
document.addEventListener('DOMContentLoaded', () => {
    // 초기 상태 설정: SFW 탭 활성화
    const sfwTab = document.querySelector('.gallery-tab[data-gallery="sfw"]');
    const nsfwTab = document.querySelector('.gallery-tab[data-gallery="nsfw"]');
    
    if (sfwTab) {
        sfwTab.classList.add('active');
    }
    if (nsfwTab) {
        nsfwTab.classList.remove('active');
    }
    
    // 초기 갤러리 상태 설정
    if (sfwGallery) {
        sfwGallery.style.display = 'grid';
        sfwGallery.classList.add('active');
        sfwGallery.classList.remove('hidden');
        loadGalleryImages(sfwImages, sfwGallery);
    }
    
    if (nsfwGallery) {
        nsfwGallery.style.display = 'none';
        nsfwGallery.classList.remove('active');
    }
    
    if (nsfwWarning) {
        nsfwWarning.style.display = 'none';
    }
    
    console.log('갤러리 초기화 완료 - SFW 활성');
    
    // 모바일에서 추가 초기화
    if (window.innerWidth <= 768) {
        setTimeout(() => {
            refreshGallery();
        }, 500);
    }
});

// NSFW 갤러리 로드 (확인 후)
function loadNsfwGallery() {
    loadGalleryImages(nsfwImages, nsfwGallery);
}

// 모바일 갤러리 강제 초기화
function forceMobileGalleryInit() {
    if (window.innerWidth <= 768) {
        console.log('모바일 갤러리 강제 초기화');
        
        // 갤러리 섹션 자체 표시
        const gallerySection = document.getElementById('gallery');
        if (gallerySection) {
            gallerySection.style.display = 'block';
            gallerySection.style.visibility = 'visible';
            gallerySection.style.opacity = '1';
        }
        
        // 현재 활성 탭 확인하여 해당 갤러리만 표시
        const activeGalleryTab = document.querySelector('.gallery-tab.active');
        const activeTabType = activeGalleryTab ? activeGalleryTab.getAttribute('data-gallery') : 'sfw';
        
        if (activeTabType === 'sfw') {
            // SFW만 표시
            if (sfwGallery) {
                sfwGallery.style.display = 'grid';
                sfwGallery.classList.add('active');
                sfwGallery.classList.remove('hidden');
                
                if (sfwGallery.children.length === 0) {
                    loadGalleryImages(sfwImages, sfwGallery);
                }
            }
            
            // NSFW는 숨김
            if (nsfwGallery) {
                nsfwGallery.style.display = 'none';
                nsfwGallery.classList.remove('active');
            }
            if (nsfwWarning) {
                nsfwWarning.style.display = 'none';
            }
        }
    }
}

// 모달 열기
function openModal(src, title) {
    modalImage.src = src;
    modalCaption.textContent = title;
    imageModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 모달 닫기
function closeModal() {
    imageModal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
        closeModal();
    }
});

// ESC 키로 모달 닫기
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && imageModal.classList.contains('active')) {
        closeModal();
    }
});

// 터치 제스처 (모바일)
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        // 왼쪽으로 스와이프 (다음)
    }
    if (touchEndX > touchStartX + 50) {
        // 오른쪽으로 스와이프 (이전)
    }
}

// 페이지 성능 최적화
const lazyImages = document.querySelectorAll('img');
lazyImages.forEach(img => {
    img.setAttribute('loading', 'lazy');
});
// 뷰포트 크기 변경 시 처리
window.addEventListener('resize', () => {
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(() => {
        // 모바일 메뉴 초기화
        if (window.innerWidth > 768) {
            mobileMenuToggle.classList.remove('active');
            mainHeader.classList.remove('active');
        } else {
            // 모바일로 전환 시 hidden 클래스 제거
            mainHeader.classList.remove('hidden');
        }
        
        // 갤러리 새로고침 (크기 변경 후)
        refreshGallery();
    }, 250);
});

// 부드러운 스크롤 효과
document.documentElement.style.scrollBehavior = 'smooth';

// 페이지 성능 최적화
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.setAttribute('loading', 'lazy');
});

// 뷰포트 크기 변경 시 처리
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // 모바일 메뉴 초기화
        if (window.innerWidth > 768) {
            mobileMenuToggle.classList.remove('active');
            mainHeader.classList.remove('active');
        }
    }, 250);
});

// 부드러운 스크롤 효과
document.documentElement.style.scrollBehavior = 'smooth'; 