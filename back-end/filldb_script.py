import requests

genre_api='http://localhost:8000/api/genre/'
cast_api='http://localhost:8000/api/cast/'
movie_api='http://localhost:8000/api/movie/'



def add_movie(name,cast,summary,genre,year,link,length,image):

    movie_body={
        "name":name,    
        "cast":cast,
        "summary":summary,
        "genre":genre,
        "year":year,
        "link":link,
        "length":length,
        "image":image
    }
    response=requests.post(movie_api,json=movie_body)
    return response.status_code



def fill_genres():
    num=1
    all_sent=True
    all_genres=["Horror","Action","Romance","Comedy","Drama","Thriller","Science fiction"]
    for genre in all_genres:
        response=requests.post(genre_api,json={"name":genre})
        if(response.status_code!=201):
            all_sent=False
            break
        else:
            print(f"genre {num} added to db")
        num+=1
    print("***************************************")
    if all_sent:
        print("Genres : OK")
    else:
        print("Genres : ERROR")
    print("***************************************")

def fill_casts():
    num=1
    all_sent=True
    all_casts=["Benjamin Bratt",
    			"Christian Bale",
    			"Heath Ledger",
    			"Leonardo Dicaprio",
    			"Brad Pitt",
    			"Edward Norton",
    			"Keanu Reeves",
                "Tom Hanks",
                "Lee Jung-jae",
                "Emma Watson",
                "Daniel Radcliffe",
                "Patrick Wilson",
                "Ryan Gosling",
                "Rachel McAdams",
                "Tom Hardy",
                "Johnny Depp",
                "Alvaro Morte",
                "Ursula Corbero",
                "Pedro Alonso",
                "Daniel Craig",
                "Ana de Armas",
                "Vin Diesel",
                "John Cena",
                "Timothee Chalamet",
                "Joaquin Phoenix",
                "Robert De Niro",
                "Tsutomu Tatsumi",
                "Marlon Brando",
                "Al Pacino",
                "Jake Johnson",
                "Eddie Murphy",
                "Cameron Diaz",
                "Bryan Cranston",
                "Aaron Paul",
                "Robert Downey Jr",
                "Chris Hemsworth",
                "Chris Evans",
                "Mark Ruffalo"]
    for cast in all_casts:
        response=requests.post(cast_api,json={"name":cast})
        if(response.status_code!=201):
            all_sent=False
            break
        else:
            print(f"cast {num} added to db")
        num+=1
    print("***************************************")
    if all_sent:
        print("Casts : OK")
    else:
        print("Casts : ERROR")
    print("***************************************")

def fill_movies():
    all_sent=True
    all_names=["Coco",
    			"The Dark Knight",
    			"Inception",
    			"Fight Club",
    			"The Matrix",
                "Forrest Gump",
                "Squid Game",
                "Harry Potter and the Deathly Hallows: Part 2",
                "The Conjuring",
                "The Notebook",
                "Venom: Let There Be Carnage",
                "Pirates of the Caribbean: At World's End",
                "Money Heist",
                "No Time To Die",
                "F9: The Fast Saga",
                "Dune",
                "Joker",
                "Grave of the Fireflies",
                "The Godfather",
                "The Irishman",
                "Spider-Man: Into the Spider-Verse",
                "Shrek",
                "Breaking Bad",
                "Avengers: Endgame"]
    all_casts=[[1],
    			[2,3],
    			[4],
    			[5,6],
    			[7],
                [8],
                [9],
                [10,11],
                [12],
                [13,14],
                [15],
                [16],
                [17,18,19],
                [20,21],
                [22,23],
                [24],
                [25,26],
                [27],
                [28,29],
                [26,29],
                [30],
                [31,32],
                [33,34],
                [35,36,37,38],]

    all_summaries=["Miguel pursues his love for singing in spite of his family's ban on music. He stumbles into the Land of the Dead, where he learns about his great-great-grandfather who was a legendary singer.",
    				"After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees.",
    				"Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son.",
    				"Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. Soon, their venture spirals down into something sinister.",
    				"Plagued by strange memories, Neo's life takes an unexpected turn when he finds himself back inside the Matrix.",
                    "Forrest, a man with low IQ, recounts the early years of his life when he found himself in the middle of key historical events. All he wants now is to be reunited with his childhood sweetheart, Jenny.",
                    "Hundreds of cash-strapped contestants accept an invitation to compete in children's games for a tempting prize, but the stakes are deadly.",
                    "Harry, Ron and Hermione race against time to destroy the remaining Horcruxes. Meanwhile, the students and teachers unite to defend Hogwarts against Lord Voldemort and the Death Eaters.",
                    "The Perron family moves into a farmhouse where they experience paranormal phenomena. They consult demonologists, Ed and Lorraine Warren, to help them get rid of the evil entity haunting them",
                    "Duke reads the story of Allie and Noah, two lovers who were separated by fate, to Ms Hamilton, an old woman who suffers from dementia, on a daily basis out of his notebook.",
                    "Eddie Brock is still struggling to coexist with the shape-shifting extraterrestrial Venom. When deranged serial killer Cletus Kasady also becomes host to an alien symbiote, Brock and Venom must put aside their differences to stop his reign of terror.",
                    "As the East India Company gains untold power and persecutes pirates en masse, Will, Elizabeth and Captain Barbossa decide to bring Jack Sparrow back from the dead for one final battle",
                    "A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose. ",
                    "James Bond is enjoying a tranquil life in Jamaica after leaving active service. However, his peace is short-lived as his old CIA friend, Felix Leiter, shows up and asks for help.",
                    "Dom Toretto is living the quiet life off the grid with Letty and his son, but they know that danger always lurks just over the peaceful horizon. This time, that threat forces Dom to confront the sins of his past to save those he loves most.",
                    "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. ",
                    "Arthur Fleck, a party clown, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of crime and chaos.",
                    "A devastating meditation on the human cost of war, this animated tale follows Seita (Tsutomu Tatsumi), a teenager charged with the care of his younger sister, Setsuko (Ayano Shiraishi), after an American firebombing during World War II separates the two children from their parents.",
                    "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
                    "In the 1950s, truck driver Frank Sheeran gets involved with Russell Bufalino and his Pennsylvania crime family. As Sheeran climbs the ranks to become a top hit man, he also goes to work for Jimmy Hoffa -- a powerful Teamster tied to organized crime.",
                    "After gaining superpowers from a spider bite, Miles Morales protects the city as Spider-Man. Soon, he meets alternate versions of himself and gets embroiled in an epic battle to save the multiverse.",
                    "Shrek, an ogre, embarks on a journey with a donkey to rescue Princess Fiona from a vile lord and regain his swamp.",
                    "Walter White, a chemistry teacher, discovers that he has cancer and decides to get into the meth-making business to repay his medical debts. His priorities begin to change when he partners with Jesse.",
                    "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",]
    all_genres=[4,
    			2,
    			7,
    			6,
    			7,
                5,
                5,
                2,
                1,
                3,
                6,
                2,
                6,
                2,
                2,
                7,
                5,
                5,
                5,
                5,
                2,
                4,
                5,
                2,]
    all_years=[2017,
    			2008,
    			2010,
    			1999,
    			1999,
                1994,
                2021,
                2011,
                2013,
                2004,
                2021,
                2007,
                2017,
                2021,
                2021,
                2021,
                2019,
                1988,
                1972,
                2019,
                2018,
                2001,
                2008,
                2019,]
    all_links=["https://cdn.uptvs.com/?s=11&f=animation/Coco_2017_720p_UPTV.co_Sub.mkv",
    			"https://cdn.uptvs.com/?s=4&f=/film/The.Dark.Knight.2008.BRrip.720P.Farsi_UPTV.co.mkv",
    			"https://cdn.uptvs.com/?s=4&f=film/Inception_720p_UPTV.co.mkv",
    			"https://cdn.uptvs.com/?s=1&f=film/Fight_Club_1999_720p_UPTVz.co_Duble.mkv",
    			"https://cdn.uptvs.com/?s=1&f=film/The_Matrix_1999_720p_UPTVz.co.mkv",
                "https://cdn.uptvs.com/?s=11&f=film/Forrest_Gump_1994_720p_UPTV.co_Duble.mkv",
                "https://cdn.uptvs.com/?s=1&f=serial/Squid%20Game/s1/Squid.Game.S01.E01.720p.Sub_UPTV.co.mkv,https://cdn.uptvs.com/?s=1&f=serial/Squid%20Game/s1/Squid.Game.S01.E02.720p.Sub_UPTV.co.mkv,https://cdn.uptvs.com/?s=1&f=serial/Squid%20Game/s1/Squid.Game.S01.E03.720p.Sub_UPTV.co.mkv,https://cdn.uptvs.com/?s=1&f=serial/Squid%20Game/s1/Squid.Game.S01.E04.720p.Sub_UPTV.co.mkv,https://cdn.uptvs.com/?s=1&f=serial/Squid%20Game/s1/Squid.Game.S01.E05.720p.Sub_UPTV.co.mkv",
                "https://cdn.uptvs.com/?s=1&f=film/Harry_Potter_and_the_Deathly_Hallows_Part_2_720p_UPTVz.co.mkv",
                "https://cdn.uptvs.com/?s=11&f=film/The.Conjuring.2013.720p.Sub_UPTV.co.mkv",
                "https://cdn.uptvs.com/?s=11&f=film/The_Notebook_2004_720p_UPTV.co_Duble.mkv",
                "https://cdn.uptvs.com/?s=1&f=film/VenomLetThereBeCarnage.2021.Dub.720p_UPTV.co.mkv",
                "https://cdn.uptvs.com/?s=11&f=film/Pirates_of_the_Caribbean_3_At_World%27s_End_2007.720p.Farsi_UPTV.co.mkv",
                "https://cdn.uptvs.com/?s=1&f=serial/Money%20Heist/S5/Money.Heist.S5.E01.720p.Sub_UPTV.co.mkv,https://cdn.uptvs.com/?s=1&f=serial/Money%20Heist/S5/Money.Heist.S5.E02.720p.Sub_UPTV.co.mkv,https://cdn.uptvs.com/?s=1&f=serial/Money%20Heist/S5/Money.Heist.S5.E03.720p.Sub2_UPTV.co.mkv,https://cdn.uptvs.com/?s=1&f=serial/Money%20Heist/S5/Money.Heist.S5.E04.720p.Sub_UPTV.co.mkv,https://cdn.uptvs.com/?s=1&f=serial/Money%20Heist/S5/Money.Heist.S5.E05.720p.Sub_UPTV.co.mkv",
                "https://cdn.uptvs.com/?s=1&f=Mj/film/No_Time_to_Die_SUB_Q_720p.UPTV.co.mp4",
                "https://cdn.uptvs.com/?s=11&f=film/F9_The_Fast_Saga_2021_720p_UPTV.co_Sub_2.mkv",
                "https://cdn.uptvs.com/?s=11&f=film/Dune_Part_One_2021_720p_UPTV.co_Sub.mkv",
                "https://cdn.uptvs.com/?s=11&f=film/Joker%202019.720p.Sub2_UPTV.co.mkv",
                "https://cdn.uptvs.com/?s=11&f=animation/Grave_of_the_Fireflies_1988_720p_UPTV.co_Duble.mkv",
                "https://cdn.uptvs.com/?s=1&f=film/The_Godfather_1_1972_720p_UPTV.co.mkv",
                "https://cdn.uptvs.com/?s=11&f=film/The%20Irishman%202019.720p.Sub_UPTV.co.mkv",
                "https://cdn.uptvs.com/?s=11&f=animation/SpiderMan%20Into%20the%20Spider%20Verse%202018.720p.Sub_UPTV.co.mkv",
                "https://cdn.uptvs.com/?s=11&f=animation/Shrek%201.2001.720p.Farsi_UPTVz.co.mkv",
                "https://dl1.p30updl.ir/uptv/serial/Breaking_Bad/S5/Breaking%20Bad%20S05%20E01.720p.Farsi2_UPTV.co.mkv,https://dl1.p30updl.ir/uptv/serial/Breaking_Bad/S5/Breaking%20Bad%20S05%20E02.720p.Farsi_UPTV.co.mkv,https://dl1.p30updl.ir/uptv/serial/Breaking_Bad/S5/Breaking%20Bad%20S05%20E03.720p.Farsi_UPTV.co.mkv,https://dl1.p30updl.ir/uptv/serial/Breaking_Bad/S5/Breaking%20Bad%20S05%20E04.720p.Farsi_UPTV.co.mkv,https://dl1.p30updl.ir/uptv/serial/Breaking_Bad/S5/Breaking%20Bad%20S05%20E05.720p.Farsi_UPTV.co.mkv",
                "https://cdn.uptvs.com/?s=11&f=film/Avengers_Endgame_2019_720p_UPTV.co_Sub_WebDL.mkv",]
    all_lengths=[102,
				137,
				146,
				134,
				93,
                130,
                60,
                126,
                112,
                100,
                97,
                147,
                50,
                144,
                137,
                155,
                114,
                87,
                151,
                209,
                116,
                89,
                50,
                180,]
    all_images=["https://www.doostihaa.com/wp-content/webp-express/webp-images/uploads/2017/11/Coco-2017.jpg.webp",
    			"https://dlroozane.net/wp-content/uploads/2020/11/The-Dark-Knight.jpg",
    			"https://dlroozane.net/wp-content/uploads/2020/10/Inception.jpg",
    			"https://hexdownload.co/img/2019/01/Fight-Club-1999-in.jpg",
    			"https://www.film2serial.ir/wp-content/uploads/2016/12/1999-poster-matrix-2-200x300.jpg",
                "https://hexdownload.co/img/2020/12/forrest-gump-1994-i.jpg",
                "https://dlroozane.net/wp-content/uploads/2021/09/Squid-Game.jpg",
                "https://www.film2serial.ir/wp-content/uploads/2018/12/Harry-Potter-and-the-Deathly-Hallows-Part-2-2011.jpg",
                "https://www.film2serial.ir/wp-content/uploads/2016/05/The-Conjuring-2013.jpg",
                "https://dlroozane.net/wp-content/uploads/2021/06/The-Notebook.jpg",
                "https://filmr.ir/wp-content/uploads/2021/08/Venom-Let-There-Be-Carnage-poster-min-1.jpg",
                "https://flxt.tmsimg.com/assets/p164907_p_v10_ak.jpg",
                "https://dlroozane.net/wp-content/uploads/2021/08/Money-Heist.jpg",
                "https://hexdownload.co/img/2020/04/No-Time-to-Die-2020-i.jpg",
                "https://upmedia.me/wp-content/uploads/2020/08/Fast-Furious-9-2021.jpg",
                "https://hexdownload.co/img/2019/08/Dune_2021.jpg",
                "https://www.film2serial.ir/wp-content/uploads/2019/11/MV5BZWFiNzBkYjEtMmY4My00MDFjLTg2NTUtMzI2ODZlZjBjYzc3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SY1000_CR006741000_AL_.jpg",
                "https://hexdownload.co/img/2021/02/grave-of-the-fireflies-1998-poster.jpg",
                "https://hexdownload.co/img/2021/03/The-Godfather-1972-i.jpg",
                "https://www.film2serial.ir/wp-content/uploads/2019/12/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SY1000_CR006821000_AL_.jpg",
                "https://filmr.ir/wp-content/uploads/2020/07/Spider-Man-Into-the-Spider-Verse-7.jpg",
                "https://dlroozane.net/wp-content/uploads/2020/10/Shrek.jpg",
                "https://www.f2m.site/wp-content/uploads/2019/03/BreakingBadnetwork.jpg",
                "https://www.f2m.site/wp-content/uploads/2019/04/rNfPxahYiT9fHmUvpjIB7MTShGn.jpg",]

    for i in range(0,len(all_names)):
        status_code=add_movie(all_names[i],all_casts[i],all_summaries[i],all_genres[i],all_years[i],all_links[i],all_lengths[i],all_images[i])
        if status_code!=201:
            all_sent=False
            break
        else:
            print(f"movie {i+1} added to db")
    print("***************************************")
    if all_sent:
        print("Movies : OK")
    else:
        print("Movies : ERROR")
    print("***************************************")

fill_genres()
fill_casts()
fill_movies()

