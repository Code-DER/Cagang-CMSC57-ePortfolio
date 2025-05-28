// Get the topic from the URL
const params = new URLSearchParams(window.location.search);
const topic = params.get('topic');

// Topic data
const topics = {
    counting: {
        title: "Counting",
        description: "Counting tackles combinatorics which is the study of arrangements of objects, and enumeration which is the counting of objects with certain properties.",
        learnings_img: "../media/counting/permutations.webp",
        learnings_heading: "What did I learn about Counting?",
        learnings: `In this lesson, there are different concepts I learned about counting:
        <br><br>
        &emsp; First, is the <b>product rule</b> wherein a procedure can be broken down into 2 tasks. If there is a number of ways to do the 1st task and for each of these ways, there is a number
        of ways to do the second task, then the number of ways to do the procedure is to multiply both number of ways each task is done. In set theoretic form, it is denoted through |A x B| = |A| x |B|.
        <br><br>
        &emsp; Second, we have the <b>sum rule</b>, if a task can be done either in one of n<sub>1</sub> ways or in one of n<sub>2</sub> ways, then there's n<sub>1</sub> + n<sub>2</sub> ways
        to do the task. In set theoretic form, it is denoted through the formula |A U B|= |A| + |B|.
        <br><br>
        &emsp; Third, is we have the <b>subtraction rule</b>, also known as the principle of inclusion-exclusion. This rule states that if a task can be done in one of n<sub>1</sub> of ways or in one of n<sub>2</sub> of ways, 
        then the total of ways to do the task is n<sub>1</sub> + n<sub>2</sub> minus the number of ways to do the task that are common to the two different ways. In set theoretic form, it is denoted through the 
        formula of |A U B|= |A| + |B| - |A ∩ B|.
        <br><br>
        &emsp; There is also the <b>tree diagram</b> which allows us to enumerate possible choices. Once the tree is drawn, the results is the number of valid leaves.
        <br>
        <img src='../media/counting/treediagram.png' class='img-inside-info'>
        <br>
        &emsp; Fourth, we have the <b>pigeonhole principle</b> which states that if 10 pigeons fly into 9 pigeonholes to roost, then at least one of the 9 pigeonholes must have at least two
        pigeons in it.
        <br>
        <img src='../media/counting/pigeonhole.png' class='img-inside-info'>
        <br>
        &emsp; Next, we have the permutations and combinations. A <b>permutation</b>, denoted by P(n,r) or <sub>n</sub>P<sub>r</sub>, is an ordered arrangement of distincit elements of some set. While an <b>r-combination</b>, denoted
        by C(n,r) or <sub>n</sub>C<sub>r</sub>, of elements of a set is an unordered selection of r elements from the set.
        <br><br>
        &emsp; Sometimes, elements may be used repeatedly. That is why there are <b>permutations and combinations with repetition</b>. Counting permutations when repetition is allowed can be done with the product rule, the number of
        r-permutations of a set of n objects with repetition is n<sup>r</sup>. Then there is the combinations with repetition, where there are C(n + r - 1, r) = C(n + r - 1, n - 1) r-combinations from a
        set with n elements when repetition of elements is allowed.
        <br>
        <img src='../media/counting/permucombiformula.png' class='img-inside-info'>
        <br>
        &emsp; Lastly, I also learned about <b>generating permutations and combinations</b> because they are not just counted, they are also generated. Generating permutations is creating all possible ordered arrangements of a set
        of items in <b>lexicographic</b> (alphabetical or numerical) order. And generating combinations means creating all possible groups of items, where order doesn't matter, and listing them also in lexicographic order.`,
        analysis_img: "../media/counting/outfitchoose.png",
        analysis_heading: "Analysis of Counting",
        analysis: `&emsp; When learning this topic, there are a lot of concepts that come up, with different scenarios having different solutions. Come to think of it, what does this topic have to do with anything? 
        Then I realized, that we actually use it almost everyday. These counting problems actually occur to us when we're choosing what to wear, what to eat, when arranging, when grouping, and many more. We can solve
        these types of problems with the help of the concepts like the sum rule, product rule, permutations, and combinations.`,
        applications_img: "../media/counting/chairs.png",
        applications_heading: "When we encounter these in real-life, how does it happen?",
        applications: `Based from the analysis, we know that we encounter counting problems in our daily lives. But what exactly?
        <br><br>
        &emsp; We mostly encounter these counting problems when choosing what to wear. For example, we want to choose a shirt to wear, and we have options of orange shirts with 3 types and pink shirts with 5 types, with those choices
        we can use the sum rule, then are given 3 + 5 = 8 total choices to choose from those shirts. Another one is choosing a full outfit, for example is we have 3 shirts and 4 pants to choose from, using the product rule, we
        have 3 x 4 = 12 total outfit combinations we can make with those shirts and pants.
        <br><br>
        &emsp; One example where we can see the Pigeonhole principle is the socks we have in a drawer. I have 4 different types of socks in my drawer, and when I pick up 5 from it, I am guaranteed to have at least one matching pair of
        of socks.
        <br><br>
        &emsp; One example of permutations is seating arrangements. In school, me, Krystel, Michael, and Joseph are seated in a row. Since there are 4 of use, there is 4! = 24 ways or permutations to arrange us in sitting in a row. For
        combinations on the other hand, we can think of it when choosing 2 flavors for a cone out 5 in ice cream flavors. Using the concept of combinations, there are C(5, 2) = 10 combinations of ice cream flavors we can have.`,
        reflection_img: "../media/counting/permutations-and-combinations-.png",
        reflection_heading: "My Reflection",
        reflection: `&emsp; I didn't even realize that I encounter these counting problems everyday. Mainly during the night when I am choosing what outfit to wear for the next day, or during lunch time in the canteen when choosing 
        what food I will eat with the different choices I have. I usually struggle because it take me a long time to choose, and at first I thought because I'm picky and struggle with my preferences, but now I
        realized that it is also because of these counting problems. I have so many clothes that there are a lot of permutations and combinations I am given with, whether I just pick random combinations or I want to wear a specific
        type of pants and just choose randomly from my shirts. This is the same with my food, I mainly eat fried porkchop during lunch but I struggle with what I want to pair it with, whether its pancit canton, egg, bihon, and many more.`,
        thoughts_img: "../media/thinking.png",
        thoughts_heading: "What do I think?",
        thoughts: `&emsp; I think that this lesson was very hard at first. I understood the concepts at first but applying it with the different formulas and the different problems we were given was difficult. Sometimes I would struggle
        to choose whether a problem talks about permutations or combinations, or uses the sum or product rules. But now that I've kind of grasped the concept, I think I can differentiate which ones are which. And with my reflection and
        realization, it gave me an idea that this lesson has a lot of applications in real life, and this makes me wonder what other counting problems I encounter everyday that I have not even realized are counting problems yet.`
    },
    algebraic_structure_and_groups: {
        title: "Algebraic Structure and Groups",
        description: `Algebraic Structures in mathematics is a set with one or more operations defined on it. These operations on these structures must follow or adhere to specific rules.`,
        learnings_img: "../media/algebraic_structures/binaryoperation.png",
        learnings_heading: "What are Algebraic Structures?",
        learnings: `&emsp; An <b>algebraic structure</b> is a set equipped with one or more operations defined on it which follows specific rules. Algebraic structures are mathematical systems where we can perform operations like addition and multiplication,
        and their properties can all be studied.
        <br><br>
        &emsp; Each structure includes a <b>set of elements</b>. These elements can range up to numbers, matrices, functions, or letters.
        <br><br>
        &emsp; An algebraic structure also must have binary operations defined on it. These <b>binary operations</b> can be addition (+), subtraction (-), multiplication (-), or division (/).
        <br><br>
        &emsp; The algebraic structures' operations defined on it must also follow specific 'Axioms' or <b>properties</b>. These properties can be associative, identity, commutative, inverse, or distributive.`,
        analysis_img: "../media/algebraic_structures/square.png",
        analysis_heading: "What can we do with it?",
        analysis: `&emsp; With this lesson, we learned a lot about what algebraic structures are. What can we do with it? Algebraic structures allow us to organize mathematical systems based on specific rules. Using algebraic structures, we can simplify
        complex problems. We can predict behavior of systems and even create models of symmetry and structure. Basically, algebraic structures are sort of systems or a language that describes many different and unique
        concepts in math and computer science.`,
        applications_img: "../media/algebraic_structures/cryptography.webp",
        applications_heading: "Where can these be applied to?",
        applications: `Based from the analysis and the lessons I learned, algebraic structures have a lot of applications in real-life.
        <br><br>
        &emsp; Algebraic structures can be applied in cryptography. These are utilized in the design and analysis of cryptographic algorithms, encryption, digital signatures, and cryptographic protocols. This ensures secure online banking, messaging, and
        digital identities.
        <br><br>
        &emsp; These can also be applied in the Coding Theory. These are used to build error-detecting and correcting codes to encode and decode data, ensuring reliable transmission and error detection.
        <br><br>
        &emsp; Another application of algebraic structures is on computer graphics. Algebraic structures such as group-like structures are used for 3D rotations and transformations. These types of algebraic structures help animate, rotate, and scale objects
        in games, simulations, and animations.`,
        reflection_img: "../media/algebraic_structures/rotation.png",
        reflection_heading: "What then?",
        reflection: `&emsp; Through the concepts of algebraic structures and its applications, I realized that algebraic structures aren't just abstract, they are one of the solutions to solving real-world problems. I didn't really realize how big of an impact
        these structures have on technology. I haven't really had that much interactions or head-on encounter with algebraic structures, but I sure will explore more about it especially that it has a lot of applications in computer science.`,
        thoughts_img: "../media/thinking.png",
        thoughts_heading: "What I think?",
        thoughts: `&emsp; I thought that this lesson was very confusing at first. I didn't understand what algebraic structures actually are when we first tackled this lesson. But now that I've learned it, I came to realize that it actually has a lot of applications
        that help solve real-life problems. I still think that this lesson is difficult but fun to learn. The next topic about specific algebraic structures, namely the groups, rings, and fields, expands more about the ideas and how to analyze, solve,
        and study the behavior of these different structures.`
    },
    groups_rings_and_fields: {
        title: "Groups, Rings, and Fields",
        description: `Algebraic structures are mathematical systems that consists of a set of elements and one or more operations defined on it. These structures follows specific properties or rules depending on what type of structure it is. The most common
        of these algebraic structures are the Groups, Rings, and Fields.`,
        learnings_img: "../media/groups_rings_fields/transformations.png",
        learnings_heading: "What are these Groups, Rings, and Fields?",
        learnings: `&emsp; The previous lesson talked about the concepts of algebraic structures. In this lesson, we will talk about specific algebraic structures, namely the <b>groups</b>, <b>rings</b>, and <b>fields</b>. Let's talk about the concepts, terms, rules, and properties I've
        learned in this topic.
        <br><br>
        &emsp; A <b>Group</b> is a non-empty set of elements together with an operation that combines any two elements to form a third element while satisfying conditions.
        <li><u>Closure</u>: For any two elements a and b in the set, the result of the operation a * b must also be in the set.</li>
        <li><u>Associativity</u>: The operation must be associative, meaning  (a * b) * c = a * (b * c) for all elements a, b, and c in the set.</li>
        <li><u>Identity Element</u>: In the set, there must be an element e that such for every element a in the set, a * e = e * a = a. This means that e is the identity element of the set.</li>
        <li><u>Inverse Element</u>: For every element a in the set, there exists an element b in G such that a * b = b * a = e, where e is the identity element. The element b is called the inverse of a.</li>
        <li><u>Abelian Group</u> (additional property): If the operation in the set is commutative, where a * b = b * a for all elements a and b in the set, then the group is called an abelian group.</li>
        <br>
        &emsp; A <b>Ring</b> (R, +, ⋅) is a set R together with two binary operations + (addition) and ⋅ (multiplication) such that:
        <br>
        <ul>
            <li><i>Additive Group</i>: (R, +) is an abelian group. This means that:</li>
                <ul>
                    <li><u>Closure under addition</u>: a + b ∈ R</li>
                    <li><u>Associativity of addition</u>: (a + b) + c = a + (b + c)</li>
                    <li><u>Additive identity</u>: There exists an element 0 ∈ R such that a + 0 = a</li>
                    <li><u>Additive inverse</u>: For every a ∈ R, there exists -a ∈ R such that a + (-a) = 0</li>
                    <li><u>Commutativity of addition</u>: a + b = b + a</li>
                </ul>
            </li>
            <li><i>Multiplication</i>: The multiplication operation (⋅) satisfies:</li>
                <ul>
                    <li><u>Closure</u>: For all a, b ∈ R, a ⋅ b ∈ R</li>
                    <li><u>Associativity</u>: (a ⋅ b) ⋅ c = a ⋅ (b ⋅ c) for all a, b, c ∈ R</li>
                </ul>
            </li>
            <li><i>Distributive Property</i>: Multiplication distributes over addition:</li>
                    <ul>
                        <li>a ⋅ (b + c) = (a ⋅ b) + (a ⋅ c)</li>
                    </ul>
            </li>
        </ul>
        <br>
        &emsp; A <b>Field</b> (F, +, ⋅) is a set F together with two binary operations + (addition) and ⋅ (multiplication) such that:
        <br>
        <ul>
            <li><i>Additive Group</i>: (F, +) forms an abelian group under addition. This means:</li>
                <ul>
                    <li><u>Closure under addition</u>: a + b ∈ R</li>
                    <li><u>Associativity of addition</u>: (a + b) + c = a + (b + c)</li>
                    <li><u>Additive identity</u>: There exists an element 0 ∈ F such that a + 0 = a</li>
                    <li><u>Additive inverse</u>: For every a ∈ F, there exists -a ∈ F such that a + (-a) = 0</li>
                    <li><u>Commutativity of addition</u>: a + b = b + a</li>
                </ul>
            <li><i>Multiplication Forms an Abelian Group</i>: Set F forms an abelian group under multiplication:</li>
            <ul>
                <li><u>Closure under multiplication</u>: a ⋅ b ∈ F</li>
                <li><u>Associativity of multiplication</u>: (a ⋅ b) ⋅ c = a ⋅ (b ⋅ c)</li>
                <li><u>Multiplicative identity</u>: There exists and element 1 ∈ F, distinct from 0, such that a ⋅ 1 = a</li>
                <li><u>Multiplicative inverse</u>: For every a ∈ F, there exists a<sup>-1</sup> ∈ F such that a ⋅ a<sup>-1</sup> = 1</li>
                <li><u>Commutativity of multiplication</u>: a ⋅ b = b ⋅ a</li>
            </ul>
            <li><i>Distributive Property</i>: Multiplication distributes over addition:</li>
            <ul>
                <li>a ⋅ (b + c) = (a ⋅ b) + (a ⋅ c)</li>
            </ul>
        </ul>
        <br>
        &emsp; I've also learned about <b>transformations</b> of groups through geometry. An example of one kind of transformation is rotation, which can be done clockwise or counter-clockwise. The rotation of a geometrical shape depends on the operation and shape. Another
        kind of transformation is a flip, which is done around an axis through a vertex perpendicular to the opposite side.`,
        analysis_img: "../media/groups_rings_fields/cryptography.png",
        analysis_heading: "What can we get from this?",
        analysis: `&emsp; These groups, rings, and fields are important topics or concepts that help us understand how different mathematical operations work together in structured ways. These algebraic structures provide a template for us to understand how certain
        elements interact under different operations. They allow us to solve real-life problems across different fields.`,
        applications_img: "../media/groups_rings_fields/rubikscube.png",
        applications_heading: "What are its applications?",
        applications: `&emsp; As previosly stated in the last topic, these algebraic structures have a lot of applications which mainly are solutions to real-world problems. Groups can be applied in Cryptography like modular arithmetic and elliptic curve cryptography. It
        is even used in Rubik's Cube as the moves follow group operations. There is also 3D graphics which can be done through group rotations and flips, and even in Molecular Geometry through the symmetry groups of molecules. Rings can be used in Coding Theory
        by detecting and correcting error in messages, and in Modular arithmetic as key in cryptographic systems. Fields can also be used in mathematical modeling which uses rational and real numbers to solve equations, error correction, and with Finite Fields, which
        are used in encryptions, QR codes, and digital communication.`,
        reflection_img: "../media/groups_rings_fields/shapes.png",
        reflection_heading: "What did I reflect?",
        reflection: `&emsp; From the learnings and and analysis I had, the algebraic structures groups, rings, and fields showed me that they solve our real-world problems. These algebraic structures are the key components protect our data,
        shape the graphics that we see in our screens, and keep communication systems working so we can talk with our loved ones. These algebraic structures are sort of the hidden math behind the technology that we use everyday, making our life easier and comfortable.
        These realizations make me want to learn more and deeper about these algebraic structures and actually want to try making something with these structures.`,
        thoughts_img: "../media/thinking.png",
        thoughts_heading: "What I thought of the topic.",
        thoughts: `&emsp; I think the topic is very helpful, especially in the field of technology where it has a lot of applications. At first, the topic is very confusing to learn, these algebraic structures have a lot of terms, rules, and properties that have to be memorized
        and familiarized. But once I undestood it, I began to see the different patterns and applications it had in our world. It mainly enhanced my abstract thinking and problem-solving as it is a topic containing a lot of structures. Overall, this topic made me realize
        the secret behind some of our technology today, and I believe that this is an essential lesson for everyone to learn.`
    },
    discrete_probability: {
        title: "Discrete Probability",
        description: `Discrete probability is the probability of events that have a finite or countably infinite number of possible outcomes.
        Discrete probability is used to analyze data and values that are distinct and can be counted.`,
        learnings_img: "../media/discrete_probability/dice.jpg",
        learnings_heading: "What did I learn?",
        learnings: `&emsp; This lesson talked about probabilities, which in general, is the likeliness of an event happening based on different situations.
        <br><br>
        &emsp; First is <b>assigning probabilities</b>, where the probability of an event is equal to the number of outcomes E divided by the total number of outcomes S. This formula shows the general idea of a probability event wherein the likeliness of an event
        to happen should be between 0 to 1, and that the sum of probabilities of all possible outcomes should be 1.
        <br><br>
        &emsp; Second is we have <b>probabilities of complements and union events</b>. The probability of complements states that with the likeliness of event E to occur, there is also a chance of it not occuring. Furthermore, union events are also tackled wherein it
        solves for the likeliness of Events A OR B happening.
        <br><br>
        &emsp; Third, we have <b>conditional probabilities</b> wherein it solves for the probability of an event A happening given event F. This means that event E is dependent on event F, the outcome of event E will depend on what event F is.
        <br><br>
        &emsp; Fourth, we have <b>independence</b>. In this type of probability, two events E and F are independent when one of the events gives no information about the probability that the other event occurs.
        <br><br>
        &emsp; Next, we have the <b>Bernoulli Trials and the Binomial Distribution</b>. Each performance of an experiment with two possible outcomes is called a Bernoulli trial. A possible outcome of a Bernoulli trial is called a success or a failure.
        <br><br>
        &emsp; Then, we have <b>random variables</b>. A random variable is a function from the sample space of an experiment to the set of real numbers. A random variable assigns a real number to each possible outcome.
        <br><br>
        &emsp; Lastly, we have the <b>Bayes' Theorem</b>. This theorem is more of an extension and expanded form of conditional probability. Given two events E and F, suppose that we know the probability of event F occuring, but we also know that an event E occurs. Then
        the conditional probability that event F occurs given that E occurs, is a more realistic estimate then the probability of F given F occurs.`,
        analysis_img: "../media/discrete_probability/probstat.png",
        analysis_heading: "Let's Analyze!",
        analysis: `&emsp; Now given these topics and concepts, what is the bigger picture for probabilities? Probabilities are about helping us understand and make better decisions under uncertainty. The idea of probability allows us to evaulate and think more to
        make smarter choices and decisions. Probability is also not purely by itself, it sometimes is combined with statistics, which help solve some of the problems in our world.`,
        applications_img: "../media/discrete_probability/coindice.webp",
        applications_heading: "Did I use this?",
        applications: `&emsp; Based from my analysis, probabilities can be combined with statistics which help us decide in some situations. For example, I recently wanted to apply for a scholarship. There was only 100 students that can apply for it and they only have 10 slots
        for the scholarship. This gave me a 10% chance to be chosen as one of the scholars. Now with this discrete probability, is it worth it for me to apply given this chance? I still chose to apply for the scholarship even though I only had a small chance of being chosen.
        I did it because there was still a 10% chance, not 0. In the end, I was not chosen.
        <br><br>
        &emsp; The most common use of probabilities is gambling, mainly using dices or a deck of cards. But something we can use everyday is a coin toss. For example, I have used a coin toss to decide whether I will drink softdrinks with my meal or just water. I set it
        so that if it lands on heads, I will drink softdrinks, else if it lands on tails, I'll just drink water.`,
        reflection_img: "../media/discrete_probability/probabilitymind.png",
        reflection_heading: "Let's Reflect!",
        reflection: `&emsp; When I was learning this lesson, I realized that discrete probability has a wide range of applications. I've always thought that it is just for games and gambling. But now to think of it, I realized that it can be applied in computer sciences,
        e-commerce, statistics, genetics, and many more.`,
        thoughts_img: "../media/thinking.png",
        thoughts_heading: "What I Think?",
        thoughts: `&emsp; I think this lesson is very important as it has a lot of applications in our daily lives. Even though I struggled to learn this because there are so many concepts and theorems to understand, I believe that this is still an essential lesson to 
        learn by everyone. It provides people with understanding on how a lot of the events happen, and even help in decision making.`
    },
    graphs: {
        title: "Graphs",
        description: `Graphs are discrete structures consisting of nodes (vertices/points) and edges (lines) that connect the nodes. 
        There are different types of graphs, ones that can have directions or not, ones that can have multiple edges, or ones that have loops. All of these graphs are important and have real-life helpful applications.`,
        learnings_img: "../media/graphs/graphs_img.jpg",
        learnings_heading: "What did I learn?",
        learnings: `&emsp; From this lesson, I have learned multiple things. A <b>simple graph</b> is one wherein each edge connects two different vertices.
        Graphs that have multiple edges connecting the same vertices are called <b>multigraphs</b>. Graphs that contain loops and possibly have multiple edges
        connecting the same pair of vertices are sometimes called <b>pseudographs</b>. All of these which are called <b>undirected graphs</b>.
        <br><br>
        &emsp; Furthermore, there are also <b>directed graphs</b>. A <b>simple directed graph</b> consists of edges with direction connecting two vertices, however, it cannot allows multiple edges or loops.
        But there is also a <b>directed multigraph</b>, which allows for loops and multiple edges connecting the same pair of vertices.
        <br><br>
        &emsp; In addition, there are ways to navigate through these graphs. First is through <b>Euler's Path or Cycle</b>, which states that each <u>edge</u> of a graph is traversed precisely once. Another one is the <b>Hamiltonian Path or Cycle</b>,
        which states each <u>vertex</u> is visited only once. Lastly is <b>Dijkstra's algorithm</b>, which solves the shortest path problem from one point to another in a graph.
        <br><br>
        &ensp; Lastly, I also learned about <b>graph coloring</b>. Graph coloring is the assignment of colors to the vertices of a graph such that no two adjacent vertices share the same color.`,
        analysis_img: "../media/graphs/shortest_path.png",
        analysis_heading: "Let's analyze!",
        analysis: `&emsp; Now with these ideas, what am I supposed to do with it? I quickly compared it with something familiar, and then I realized, these types of graphs are just similar to the roads and
        destinations we go to everyday!
        <br><br>
        &emsp; The destinations that we go to everyday, for example our home and to the school, are 2 points or vertices in a graph. The road or path that we take going from our home to the school is the edge
        of 2 vertices in a graph.`,
        applications_img: "../media/graphs/paths.jpg",
        applications_heading: "How does it work in real-life?",
        applications: `Let's apply these concepts in real-life:
        <br><br>
        &emsp; An example of an Euler's Path is a police officer who patrols the streets. In our barangay, Catalunan Grande, our barangay officers patrol each street once every night to ensure nobody is out and about late in the evening.
        <br><br>
        &emsp; We have tried to travel at least once in our life, and when traveling, there are destinations we want to visit. These destinations, or let's say tourist spots of some city, are the vertices in a graph, and we want to visit them exactly once
        during that travel. This is a real-life application of Hamiltonian path, wherein we want to visit exactly each vertex in the graph exactly once, or in this case, visit the tourist spot exactly once in our travel.
        <br><br>
        &emsp; Another one we can use in real life is Dijkstra's algorithm to find the shortest path from one point to another. I have actually tried this one very recently, as I am living in Catalunan Grande, I want to know the shortest path from our home
        to UP Mindanao in Mintal. So I went through each path I knew, which is going through Mintal Bypass Road via Uraya Catalunan Grande Road, or through Bangkal-Catalunan Pequeno Road, or through Bago Gallera-Bago Oshiro Road. I found out that the
        shortest path was through Uraya Catalunan Grande road which is only 8.2 kilometers.`,
        reflection_img: "../media/graphs/path_meme.png",
        reflection_heading: "What I reflected",
        reflection: `&emsp; I realized that this topic is really helpful because it has an application in the everyday life, and I have actually applied it before on my own. I realized that these graphs are just the representations of the place we live in. Furthermore,
        it made me think that why these theorems or algorithms are applied, such as Dijkstra's algorithm, it is because it is for comfortability and efficiency. Who would want to take a longer path which takes more time and effort, risking being late to work or school? 
        That's why we try to use the algorithm to find the shortest and most efficient path to get from one point to another so we do not have to put too much effert.`,
        thoughts_img: "../media/thinking.png",
        thoughts_heading: "What do I think?",
        thoughts: `&emsp; This lesson is my favorite among all the lessons we had in this course. I think that this lesson is very helpful for everyone. It is pretty easy to understand and analyze that it can be easily applied to your everyday life instantly. 
        It teaches us how to work smarter, not harder.`
    }
};

// Display topic content
const container = document.getElementById('topic-content');
if (topics[topic]) {
    document.title = topics[topic].title;
    document.getElementById('topic-title').textContent = topics[topic].title || "";
    document.getElementById('topic-description').innerHTML = topics[topic].description || "";
    document.getElementById('learnings-img').src = topics[topic].learnings_img || "";
    document.getElementById('learnings-heading').textContent = topics[topic].learnings_heading || "";
    document.getElementById('learnings-info').innerHTML = topics[topic].learnings || "";
    document.getElementById('analysis-img').src = topics[topic].analysis_img || "";
    document.getElementById('analysis-heading').textContent = topics[topic].analysis_heading || "";
    document.getElementById('analysis-info').innerHTML = topics[topic].analysis || "";
    document.getElementById('applications-img').src = topics[topic].applications_img || "";
    document.getElementById('applications-heading').textContent = topics[topic].applications_heading || "";
    document.getElementById('applications-info').innerHTML = topics[topic].applications || "";
    document.getElementById('reflection-img').src = topics[topic].reflection_img || "";
    document.getElementById('reflection-heading').textContent = topics[topic].reflection_heading || "";
    document.getElementById('reflection-info').innerHTML = topics[topic].reflection || "";
    document.getElementById('thoughts-img').src = topics[topic].thoughts_img || "";
    document.getElementById('thoughts-heading').textContent = topics[topic].thoughts_heading || "";
    document.getElementById('thoughts-info').innerHTML = topics[topic].thoughts || "";

} else {
    container.innerHTML = "<p>Topic not found.</p>";
}