// Get the topic from the URL
const params = new URLSearchParams(window.location.search);
const topic = params.get('topic');

// Topic data
const topics = {
    counting: {
        title: "Counting",
        description: "This is the content for counting",
        learnings_img: "../media/spinning cat.gif",
        learnings_heading: "learning test",
        learnings: "learning test",
        analysis_img: "../media/spinning cat.gif",
        analysis_heading: "analysis test",
        analysis: "analysis test",
        reflection_img: "../media/spinning cat.gif",
        reflection_heading: "reflection test",
        reflection: "reflection test",
        applications_img: "../media/spinning cat.gif",
        applications_heading: "applications test",
        applications: "applications test",
        thoughts_img: "../media/spinning cat.gif",
        thoughts_heading: "thoughts test",
        thoughts: "thoughts test"
    },
    algebraic_structure_and_groups: {
        title: "Algebraic Structure and Groups",
        description: "",
        learnings_img: "",
        learnings_heading: "",
        learnings: "",
        analysis_img: "",
        analysis_heading: "",
        analysis: "",
        reflection_img: "",
        reflection_heading: "",
        reflection: "",
        applications_img: "",
        applications_heading: "",
        applications: "",
        thoughts_img: "",
        thoughts_heading: "",
        thoughts: ""
    },
    groups_rings_and_fields: {
        title: "Groups, Rings, and Fields",
        description: "",
        learnings_img: "",
        learnings_heading: "",
        learnings: "",
        analysis_img: "",
        analysis_heading: "",
        analysis: "",
        reflection_img: "",
        reflection_heading: "",
        reflection: "",
        applications_img: "",
        applications_heading: "",
        applications: "",
        thoughts_img: "",
        thoughts_heading: "",
        thoughts: ""
    },
    discrete_probability: {
        title: "Discrete Probability",
        description: `Discrete probability is the probability of events that have a finite or countably infinite number of possible outcomes.
        Discrete probability is used to analyze data and values that are distinct and can be counted.`,
        learnings_img: "../media/dice.jpg",
        learnings_heading: "What did I learn?",
        learnings: `&emsp; This lesson talked about probabilities, which in general, is the likeliness of an event happening based on the situations.
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
        analysis_img: "../media/probstat.png",
        analysis_heading: "Let's Analyze!",
        analysis: `&emsp; Now given these topics and concepts, what is the bigger picture for probabilities? Probabilities are about helping us understand and make better decisions under uncertainty. The idea of probability allows us to evaulate and think more to
        make smarter choices and decisions. Probability is also not purely by itself, it sometimes is combined with statistics, which help solve some of the problems in our world.`,
        applications_img: "../media/coindice.webp",
        applications_heading: "Did I use this?",
        applications: `&emsp; Based from my analysis, probabilities can be combined with statistics which help us decide in some situations. For example, I recently wanted to apply for a scholarship. There was only 100 students that can apply for it and they only have 10 slots
        for the scholarship. This gave me a 10% chance to be chosen as one of the scholars. Now with this discrete probability, is it worth it for me to apply given this chance? I still chose to apply for the scholarship even though I only had a small chance of being chosen.
        I did it because there was still a 10% chance, not 0. In the end, I was not chosen.
        <br><br>
        &emsp; The most common use of probabilities is gambling, mainly using dices or a deck of cards. But something we can use everyday is a coin toss. For example, I have used a coin toss to decide whether I will drink softdrinks with my meal or just water. I set it
        so that if it lands on heads, I will drink softdrinks, else if it lands on tails, I'll just drink water.`,
        reflection_img: "../media/probabilitymind.png",
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
        learnings_img: "../media/graphs_img.jpg",
        learnings_heading: "What did I learn?",
        learnings: `&emsp; From this lesson, I have learned multiple things. A <b>simple graph</b> is one wherein each edge connects two different vertices.
        Graphs that have multiple edges connecting the same vertices are called <b>multigraphs</b>. Graphs that contain loops and possibly have multiple edges
        connecting the same pair of vertices are sometimes called <b>pseudographs</b>. All of these which are called <b>undirected graphs</b>.
        <br><br>
        &emsp; Furthermore, there are also <b>directed graphs</b>. A <b>simple directed graph</b> consists of edges with direction connecting two vertices, however, it cannot allows multiple edges or loops.
        But there is also a <b>directed multigraph</b>, which allows for loops and multiple edges connecting the same pair of vertices.
        <br><br>
        &emsp; In addition, there are ways to navigate through these graphs. First is through <b>Euler's Path or Cycle</b>, which states that each <u>edge</u> of a graph is traversed precisely once. Another one is the <b>Hamiltonian Path or Cycle</b>,
        which states each <u>vertex</u> is visited only once. Lastly is <b>Dijkstra's algorithm</b>, which solves the shortest path problem from one point to another in a graph.`,
        analysis_img: "../media/shortest_path.png",
        analysis_heading: "Let's analyze!",
        analysis: `&emsp; Now with these ideas, what am I supposed to do with it? I quickly compared it with something familiar, and then I realized, these types of graphs are just similar to the roads and
        destinations we go to everyday!
        <br><br>
        &emsp; The destinations that we go to everyday, for example our home and to the school, are 2 points or vertices in a graph. The road or path that we take going from our home to the school is the edge
        of 2 vertices in a graph.`,
        applications_img: "../media/paths.jpg",
        applications_heading: "How does it work in real-life?",
        applications: `Let's apply these concepts in real-life:
        <br><br>
        &emsp; An example of an Euler's Path is a police officer who patrols the streets. In our barangay, Catalunan Grande, our barangay offices patrol each street once every night to ensure nobody is out and about late in the evening.
        <br><br>
        &emsp; We have tried to travel at least once in our life, and when traveling, there are destinations we want to visit. These destinations, or let's say tourist spot of some city, are the vertices in a graph, and we want to visit them exactly once
        during that travel. This is a real-life application of Hamiltonian path, wherein we want to visit exactly each vertex in the graph exactly once, or in this case, visit the tourist spot exactly once in our travel.
        <br><br>
        &emsp; Another one we can use in real life is Dijkstra's algorithm to find the shortest path from one point to another. I have actually tried this one very recently, as I am living in Catalunan Grande, I want to know the shortest path from our home
        to UP Mindanao in Mintal. So I went through each path I knew, which is going through Mintal Bypass Road via Uraya Catalunan Grande Road, or through Bangkal-Catalunan Pequeno Road, or through Bago Gallera-Bago Oshiro Road. I found out that the
        shortest path was through Uraya Catalunan Grande road which is only 8.2 kilometers.`,
        reflection_img: "../media/path_meme.png",
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