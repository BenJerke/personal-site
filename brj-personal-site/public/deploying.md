# Deploying This Site with Docker - 8/23/2023

## What went well, what went wrong, what I (hopefully) learned

On Monday (August 21st, 2023),  I posted the following message in my bootcamp's alumni Slack channel: 

> *HI HEY HELLO.  
My goal for today is to deploy a personal website. If you currently have one of those (or a personal GitHub page), I’d like to feature a link to it in a “Some Of My Friends” section.  
If you respond to this with a link, I will put it there along with your name! (edited)*

Well, it's Wednesday. Apologies to the kind people of Tech Elevator CBUS 20 who replied to that message, I'm a bit late. What follows is an explanation of what happened, why I thought it would be easy, and the gotchas I ran into. 



### 1: GOALS

My goals for this site were as follows: 
- Showcase my Vue.js skills to employers
- Learn a new skill
- Build myself a platform to share things I've learned with others and my future self

At the time I'm writing this, the Vue app doesn't do anything too fancy. I used the [zero-md](https://zerodevx.github.io/zero-md/) node package to create a 'Post' component, which allows me to pull and render the markdown files that comprise these posts. The Post component is nested within a v-for loop inside a main display container component, which passes each markdown file's link in via props. Right now, I've only got one post, and it's hard-linked. My next iteration will incorporate an API service call to pull links to posts from an external CDN. I haven't decided on what to use yet, but that's a decision for another day. 

The new skill I had my eye on was using Docker to build and deploy web apps. I'd never used Docker before, but it sounded like a magic-bullet solution to a number of common problems: 
- Running your stuff on someone else's computer
- Keeping secret stuff secret
- Setting up CI/CD for your production build

The idea of being able to handle all aspects of the design, development, and deployment process greatly appeals to me. Docker seemed like a way to achieve that. I thought it'd be as easy as installing the application, building my image, spinning up a cloud server, pulling my container, and running it. That turned out to be half-true. 


### 2. GO! 

Searching for instructions on deploying a Vue 2 app with Docker returned [this extremely useful article from the Vue CLI team](https://cli.vuejs.org/guide/deployment.html) with that featured instructions for going live on several different service providers. The Docker guide was a bit more involved than the others. Where most service providers like Heroku and Vercel just take your code and handle serving it themselves, using Docker means you need to set up a web server to run your app inside of its container image. Luckily, the guide provided simple instructions for doing just that: It featured a dockerfile that pulled from the official nginx image, and an nginx config file to place in your project. 

Full disclosure: when I was first reading the guide, I had no idea what either of those files were truly doing. I just knew that nginx was a highly regarded open-source webserver, and it seemed like the dockerfile contained commands to run the project's production build scripts. It looked good enough, so I didn't ask too many questions. 

After installing Docker on my machine, I followed the [starter guide](https://docs.docker.com/get-started/) to build an image from my project; which ran without any issues. I specified a port for my app to run on, accessed its container from my browser, and my site appeared as expected. The next step was to push my container to Docker Hub, and pull it down to a server machine. I decided to use a Digital Ocean droplet, for no particular reason other than they're cheap, and I know a few other people who use them for project. I selected a ready-made Ubuntu droplet with Docker installed, and started it up. 



### 3. OBSTACLES

After SSHing into my droplet, I pulled my image, attempted to run it, and ran smack into my first obstacle: an error message told me that my image was configured to run on the linux/arm64 platform, which wasn't compatible with the Docker instance's linux/amd64 platform. I had a pretty good guess as to why it was happening: I'd gone out and bought a fancy new Macbook Pro with a super-whamadyne M2 chip under the hood, and Apple's new choice of CPU architecture causes compatibility issues at a super low level. Apparently this is something they've had to deal with before, which necessitated the development of [Rosetta](https://en.wikipedia.org/wiki/Rosetta_(software)) way back in the day. I'd had to interact with it once before when changing my machine's default shell from zsh to bash. What threw me for a loop is that I had assumed Docker was platform-agnostic. A quick read through the app's known issues would've made this problem clear, which is something I'll have to remember next time I try to work with something new - especially considering the reality of my hardware. 

 Getting the platform problem figured out took most of my work time on Monday evening, Tuesday, and this morning. I was finally saved by [this excellent article](https://www.docker.com/blog/faster-multi-platform-builds-dockerfile-cross-compilation-guide/) that described my exact issue and provided detailed step-by-step instructions for solving it. After rebuilding my image with buildx and targeting the linux/amd64 platform, I was able to run my container on the droplet without any problems, and access it over the internet. We were live! 


### 4. NEXT STEPS

This was definitely a learning-as-you-go situation, which made it fun. That said, there are some things I can do to make things go a bit smoother next time around: 

- It pays dividends to research a tool before attempting to use it. Spending more time familiarizing myself with Docker, learning how it interacts with my setup, and noting its known issues beforehand would have made the deployment go much easier. 
- The same principle applies to SSH. If I had taken the time to learn how to configure it on my machine instead of relying on Digital Ocean's browser-based console, I could've saved a bunch of clicking around. Plus, SSH is a tool I'll definitely encounter again in my career. It'll be good to learn how it works sooner rather than later. 
- I can set up a CI/CD pipeline to update my image, push it to Docker Hub, and have my droplet pull the image when a new version hits. This will obviously save a ton of time, and again; be something useful to learn now instead of when I'm on the job. 
- I can spend more time learning about Digital Ocean's suite of tools, and figure out how to better leverage them for future projects. Cloud infrastructure is awesome, but there's so much of it out there that it's hard to know the right tool for a given job; and hard to know if you're using the tools you've got to their full potential. 

I've definitely got enough to keep busy. I'll post again once I've got a better way to store and serve these files. If you have any feedback on what you've read, my site, or any of my GitHub projects, feel free to hit me up at benj427@gmail.com. I'm always trying to improve. 
