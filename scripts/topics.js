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
    graphs: {
        title: "Graphs",
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
    }
};

// Display topic content
const container = document.getElementById('topic-content');
if (topics[topic]) {
    document.title = topics[topic].title;
    document.getElementById('topic-title').textContent = topics[topic].title || "";
    document.getElementById('topic-description').textContent = topics[topic].description || "";
    document.getElementById('learnings-img').src = topics[topic].learnings_img || "";
    document.getElementById('learnings-heading').textContent = topics[topic].learnings_heading || "";
    document.getElementById('learnings-info').textContent = topics[topic].learnings || "";
    document.getElementById('analysis-img').src = topics[topic].analysis_img || "";
    document.getElementById('analysis-heading').textContent = topics[topic].analysis_heading || "";
    document.getElementById('analysis-info').textContent = topics[topic].analysis || "";
    document.getElementById('reflection-img').src = topics[topic].reflection_img || "";
    document.getElementById('reflection-heading').textContent = topics[topic].reflection_heading || "";
    document.getElementById('reflection-info').textContent = topics[topic].reflection || "";
    document.getElementById('applications-img').src = topics[topic].applications_img || "";
    document.getElementById('applications-heading').textContent = topics[topic].applications_heading || "";
    document.getElementById('applications-info').textContent = topics[topic].applications || "";
    document.getElementById('thoughts-img').src = topics[topic].thoughts_img || "";
    document.getElementById('thoughts-heading').textContent = topics[topic].thoughts_heading || "";
    document.getElementById('thoughts-info').textContent = topics[topic].thoughts || "";

} else {
    container.innerHTML = "<p>Topic not found.</p>";
}