## DNS Switching
Redundancy is a key feature of modern application deployments. To that end, while knowing when a service goes down is good, automatically failing over to a separate cluster is better.

## Problem
Assume the following scenario. Whenever we deploy a new build, we deploy to a server rooted at 34.3.3.3. Simultaneously, we mount the old build on a fallback server at 34.4.5.6. Your task is to write an application which:

1. Continuously monitors the production site (morgan.solutions)
2. When a failure condition (for our purposes, we'll call this a non-2xx or 3xx response) is met, the following occurs:
  a) The Route53 record sets are modified such that the domain root points to the old build and a new subdomain - failing.morgan.solutions - is generated and points to the new build
3. The monitor should then point to the subdomain failing.morgan.solutions until an OK response is received, at which point the DNS changes made in step 2 and the monitor change made in this step should be reversed.

## What You'll Need
1. AWS Access Key and ID. Contact developers@forthepeople.com with subject line "Request for AWS Keys: Engineering Challenge" and in the body include your name and the position you are applying for.
