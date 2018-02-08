## Mount and configure Django application
We have a Django applicaiton that we now need to host for others to use. There's many things to keep in mind, but we are mostly concerned with getting something to come up in a prod-like environment.

## Problem
Assume that we are using uWSGI and nginx. Also assume that we are only using HTTP for this site.

1. Write configuration for both nginx and uWSGI that will serve content over port 80 on the frontend, with four backends pointing to the same application.
2. Ensure that we are health checking the backends successfully.
3. (Bonus) Write a simple build/deployment set of scripts with any language you want. Assume that builds/deploys are always on clean, ephemeral boxes.

## What You'll Need
1. Access to an EC2 instance. Contact developers@forthepeople.com with subject line "Request for EC2 Instance: Engineering Challenge" and in the body include your name and the position you are applying for.
