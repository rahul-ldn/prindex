#!/bin/bash
echo "Starting infographic generation…"
START_TIME=$(date +%s)

for i in {0..248}
do
	echo $i
	time node puppeteer-script.js $i
done

END_TIME=$(date +%s)

echo "It took $(($END_TIME - $START_TIME)) seconds to regenerate the infographics."
