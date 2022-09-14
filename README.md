<p>This project was an assignment that was given by the university to develop a voting system that is to be used for any election that will be carried out in the university.The system was also supposed to include concepts of blockchain.</p>
<p>This was my attempt of the proposed assignment.</p>
<h1>The Project Description</h1>
<p>The system was developed in python with the Flask framework. The system encorporated assymetric cryptographic encryption to ensure that once a vote has been casted it is kept secure and only the user that has voted, can retrieve their vote.</p>
<p>The system assigns a private and private key to a user upon account creation, and their private key will be used when retreiving their casted vote.</p>
<h1>How It Works</h1>
<ul>
<li>Once a user has created ana account and logged in, they can begin the election process.</li>
<li>First, The user will be required to verify themselves, only verified users can be allowed to vote. A secret key is sent to the user's email address and upon entering the correct key, the user will be verified and is redirected to the election page.</li>
<li>Second, the election selects the candidates and presents them to the logged in user, then the user can click on the candidate they want to cast their vote for.</li>
<li>Thirdly, the vote is recorded and secured and the user is sent the private key in their email address that they'll use if they want to retreive their casted vote.</li>
<li>Finally, when the user wants to retreive their vote, they'll enter the sent private key and upon confirmation, a unique secret key is sent to the users email address, and upon successfull confirmation, the casted vote is sent to the user's email address.</li>
</ul>
