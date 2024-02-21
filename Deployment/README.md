#### Nodejs app for EKS ####

Note :-
### Replace ###
1) proxy-real-ip-cidr: 192.168.0.0/16 in Nginx-Ingress.yaml - with your controlplane vpc cidr
2) service.beta.kubernetes.io/aws-load-balancer-ssl-cert: arn:aws:acm:us-east-1:063762586807:certificate/2ce55461-563a-4cbe-bd36-7981ec3723f3 -  with your Amazon certificate manager arn
